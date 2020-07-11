import axios from 'axios';

const API_KEY = '3adf07a2c8msh66af65687d47b30p1219f5jsn227e9a7b2b32';
const request = axios.create({

    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout : 30000,
    headers : {'X-RapidAPI-Key': API_KEY}

});

export function getAlbums(search = 'eminem'){
    const albums = request.get(`search?q=${search}`)
    .then(response => response.data.data)
    .catch(error => console.log(error));

    return albums

}

export function getAlbum(id) {
    const album = request.get(`album/${id}`)
       .then(response => response.data)
       .catch(error => console.log(error));
       return album;
    
}

export function getFavoritesAlbums() {
    const albums = localStorage.getItem('favorites');
    
       return albums;
    
}