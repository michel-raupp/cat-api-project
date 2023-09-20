/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need



export const fetchCatBreeds = async () => {
    const apiUrl = 'https://api.thecatapi.com/v1/breeds';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Não foi possível acessar a API');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Ocorreu um erro:', error);
    }
};



