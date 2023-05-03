const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '408ab944b09d11482953df9609d7b95c',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig
