import axiosClient from './axiosClient'

export const category = {
  movie: 'movie',
}

export const movieType = {
  popular: 'popular',
}

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = 'movie/' + movieType[type]

    return axiosClient.get(url, params)
  },
}

export default tmdbApi
