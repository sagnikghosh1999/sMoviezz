const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "dec5391ee0ca6544f645ac3f61c1dbe0",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
