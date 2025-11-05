import Album from "./album";

const USE_LOCAL_DATA = true;

const albumService = {
  getAll: async () => {
    if (USE_LOCAL_DATA) {
      return Album;
    } else {
      const newPromise = fetch("http://localhost:8080/albums").then(
        (response) => response.json()
      );
      return newPromise;
    }
  },
  addAlbum: async () => {
    if (USE_LOCAL_DATA) {
      return Album;
    } else {
      const AlbumPromise = fetch("http://localhost:8080/albums-v2", {
        method: "POST",
        body: formData,
      }).then((response) => {
        if (response.ok === false) {
          return Promise.reject(response); // tiez vratit promise
        }
        return response.json(); // vraca promise
      });
      return AlbumPromise;
    }
  },
};

export default albumService;
