const API_KEY = "998fbc8cc4dcef8db8fe2fd268686191";
export const LANG = "en-US";

export const requests = {
  //todo:検索機能を追加
  fetchSearchQuery: `/search/multi?api_key=${API_KEY}&language=${LANG}&query=`,
  fetchTrendingAll: `/trending/all/week?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,

  // todo:ONEMONTHAGO 1ヶ月以内のリリースかを判定するutilを作る
  // fetchReleasedMoviesByOneMonth: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=${ONEMONTHAGO}&sort_by=popularity.desc&language=${LANG}`,
  
  //movies
  fetchKidsMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
  fetchAnimeMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=16&language=${LANG}`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=35&language=${LANG}`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=27&language=${LANG}`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10749&language=${LANG}`,
  fetchDocumentMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=99&language=${LANG}`,

  //todo:seriesを追加
  //series
  discoverSeries: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_networks=213&language=${LANG}`,
  fetchTrendingSeries: `/trending/tv/week?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
  fetchActionAdventureSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10759&sort_by=popularity.desc&language=${LANG}`,
  fetchAnimationSeries: `/discover/tv?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=${LANG}`,
  fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=${LANG}`,
  fetchCrimeSeries: `/discover/tv?api_key=${API_KEY}&with_genres=80&sort_by=popularity.desc&language=${LANG}`,
  fetchDocumentarySeries: `/discover/tv?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc&language=${LANG}`,
  fetchFamilySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10751&sort_by=popularity.desc&language=${LANG}`,
  fetchKidsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10762&sort_by=popularity.desc&language=${LANG}`,
  fetchSciFiFantasySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10765&sort_by=popularity.desc&language=${LANG}`,


};

