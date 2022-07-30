const key = "9273938d8b4261df871718524907c999";

const requesets = {
  requestPopular: `
  https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestUpComing: `
  https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  requestNowPlaying: `
  https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  requestLatest: `
  https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
};

export default requesets;
