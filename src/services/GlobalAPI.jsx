import axios from "axios";


const movieBaseUrl = 'https://api.themoviedb.org/3'
const api_key = '528562c1e7b57d40068fb4e2c8ec5af2'
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=528562c1e7b57d40068fb4e2c8ec5af2'

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key="+api_key)
const getMovieByGenreId=(id)=> axios.get(movieByGenreBaseURL+'&with_genres='+id)

export default {getTrendingVideos, getMovieByGenreId}