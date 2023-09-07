
export const fetchCatBreeds = () => {
    const apiUrl = 'https://api.thecatapi.com/v1/breeds';

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível acessar a API');
            }
            return response.json();
        })
        .catch(error => {
            throw new Error('Ocorreu um erro:', error);
        });
};

