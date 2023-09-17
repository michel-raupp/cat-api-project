import { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../src/App.css';
import Header from '../../src/components/header/index';
import { Button, Hero, SliderContainer } from '../../src/styles/styles';
import { fetchCatBreeds } from '../data/'
import BreedInfo from '../../src/components/cat-info/index';
import SkillBar, { SkillBarWrapper } from '../../src/components/skills';
import DropdownSelector from '../../src/components/buttons';
import Logout from '../components/buttons/logout';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'live_P1KXG6df5bosokP8OBESWnFiDYk55D8zxNnCbzp46cfQmgKpO2AFaC0ILbScxdT8';

class Home extends Component {

  async getCatsImagesByBreed(breed_id, amount) {
    const res = await axios('/images/search?breed_ids=' + breed_id + "&limit=" + amount);
    console.table(res.data)
    return res.data;
  }

  async loadBreedImages() {
    console.log('Load Breed Images:', this.state.selected_breed)
    let breed_images = await this.getCatsImagesByBreed(this.state.selected_breed, 5)
    this.setState({ images: breed_images });
  }

  constructor(...args) {
    super(...args);
    this.state = {
      country_flag_url: '',
      images: [],
      breeds: [],
      selected_breed: {},
      current_image: {},
    };

    this.onBreedSelectChange = this.onBreedSelectChange.bind(this);
  }

  async onBreedSelectChange(e) {
    console.log("Breed Selected. ID:", e.target.value)
    await this.setState({ selected_breed: e.target.value });
    await this.loadBreedImages();

  }

  async componentDidMount() {
    if (this.state.breeds.length === 0) {
      try {
        // Use a função fetchCatBreeds em vez da função getBreeds
        const breeds = await fetchCatBreeds();
        this.setState({ breeds });
      } catch (e) {
        // Trate erros
        console.error(e);
      }
    }
  }

  // Aqui, você pode definir as constantes que serão usadas no método render
  getSliderSettings() {
    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  }

  getSelectedBreedInfo() {
    const selectedBreed = this.state.selected_breed;
    console.log("qual foi:", selectedBreed)
   
    return this.state.breeds.find(breed => breed.id === selectedBreed);
  }

  getBreedOptions() {
    return this.state.breeds.map(breed => breed.name);
  }

  handleSelectChange = (e) => {
    const newSelectedBreed = e.target.value;
    this.setState({ selected_breed: newSelectedBreed });
  }




  render() {
    const sliderSettings = this.getSliderSettings();
    const breedInfo = this.getSelectedBreedInfo();
    const breedOptions = this.getBreedOptions();

    return (
      <>
        <Header></Header>
        <Hero>
          <div className="dropdown-wrapper">
            <h2>
              Raça do Gato:
            </h2>
            <select className='dropdown'
              value={this.state.selected_breed}
              onChange={this.onBreedSelectChange}
            >
              {this.state.breeds.map((breed) => (
                <option key={breed.id} value={breed.id}>
                  {breed.name}
                </option>
              ))}
            </select>
          </div>
          <SliderContainer className="slider-container">
            <Slider {...sliderSettings}>
              {this.state.images.map((image, index) => (
                <div key={index} className="slider-image-container">
                  <img className="cat-image" alt="" src={image.url} />
                </div>
              ))}
            </Slider>
          </SliderContainer>
        </Hero>

        <BreedInfo breed={breedInfo} />

        <SkillBarWrapper>
          {breedInfo && ( // Verifique se breedInfo não é undefined
            <>
              <SkillBar label="Adaptability" value={breedInfo.adaptability} />
              <SkillBar label="Affection Level" value={breedInfo.affection_level} />
              <SkillBar label="Child Friendly" value={breedInfo.child_friendly} />
              <SkillBar label="Dog Friendly" value={breedInfo.dog_friendly} />
              <SkillBar label="Energy Level" value={breedInfo.energy_level} />
              <SkillBar label="Intelligence" value={breedInfo.intelligence} />
              <SkillBar label="Grooming" value={breedInfo.grooming} />
              <SkillBar label="Social Needs" value={breedInfo.social_needs} />
              <SkillBar label="Stranger Friendly" value={breedInfo.stranger_friendly} />
              <SkillBar label="Vocalisation" value={breedInfo.vocalisation} />
            </>
          )}
        </SkillBarWrapper>
        {breedInfo && (
          <Button><a href={breedInfo.wikipedia_url} >Wikipedia</a></Button>
        )}
        {/* <DropdownSelector selectedBreed={sliderSettings}
          breedOptions={breedOptions}
          onSelectChange={this.handleSelectChange} // Passa a função para atualizar a seleção
        /> */}
      </>
    );
  }
}

export default Home;
