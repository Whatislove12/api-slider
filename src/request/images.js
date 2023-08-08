export const getImages = async () => {
  const limitImages = 20;
  try {
    const response = await fetch(
      `https://naruto-api.fly.dev/api/v1/characters?limit=${limitImages}`
    );
    if (response.status === 200) {
      return await response.json();
    }
    throw new Error({ massage: "Fail to get data" });
  } catch (error) {
    throw error;
  }
};
