/* eslint-disable react/prop-types */
import { Component } from 'react';


class DropdownSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: this.getInitialIndex(props.selectedBreed, props.breedOptions),
    };
  }

  getInitialIndex = (selectedBreed, breedOptions) => {
    return breedOptions.indexOf(selectedBreed);
  };

  handleNextClick = () => {
    const { currentIndex } = this.state;
    const { breedOptions, onSelectChange } = this.props;

    let newIndex = currentIndex;
    if (currentIndex < breedOptions.length - 1) {
      newIndex = currentIndex + 1;
    } else {
      newIndex = 0;
    }

    this.setState({ currentIndex: newIndex });

    // Chama a função onSelectChange para atualizar a seleção no componente App
    onSelectChange({ target: { value: breedOptions[newIndex] } });
  };

  render() {
    const { breedOptions } = this.props;
    const { currentIndex } = this.state;

    return (
      <div>
        <button onClick={this.handleNextClick}>Next</button>
        <div>
          {breedOptions[currentIndex]}
        </div>
      </div>
    );
  }
}

export default DropdownSelector;

