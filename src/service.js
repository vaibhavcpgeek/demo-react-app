const API_PATH = process.env.REACT_APP_API_PATH;

const getAlbums = async () => {
  try {
    const response = await fetch(API_PATH);
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export default getAlbums;
