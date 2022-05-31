import {environment} from "../../environments/environment";


const {API, IMG} = environment;

export const urls = {
  movie: `${API}/discover/movie`,
  genres: `${API}/genre/movie/list`,
  movieSearch: `${API}/search/keyword`,
  getPoster200: `${IMG}/w200`
}
