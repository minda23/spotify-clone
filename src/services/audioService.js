import Album from "./album";

const USE_LOCAL_DATA = true;

const audioService = {
  getSong: async () => {
    if (USE_LOCAL_DATA) {
      return Album;
    } else {
      const newPromise = fetch("http://localhost:8080/audios").then(
        (response) => response.json()
      );
      return newPromise;
    }
  },
  addSong: async () => {
    if (USE_LOCAL_DATA) {
      return Album;
    } else {
      const AlbumPromise = fetch("http://localhost:8080/albums/add-audio", {
        method: "POST",
        body: JSON.stringify({
          albumid: parseInt(pickedAlbumId),
          audioid: state.modalSong.id,
        }),
      }).then((response) => {
        if (response.ok === false) {
          return Promise.reject(response);
        }
        return response.json();
      });
      return AlbumPromise;
    }
  },
};

export default audioService;
