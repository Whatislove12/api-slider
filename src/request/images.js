export const getImages = async () => {
  const limitImages = 100;
  return fetch(
    `https://naruto-api.fly.dev/api/v1/characters?limit=${limitImages}`
  )
    .then((response) => response.json())
    .then((json) => {
      const dateFilter = json.map(item => ({name: item.name, images: item.images[0]}))
      return dateFilter
    })
    .catch((error) => {
      console.error(error);
    });
};
