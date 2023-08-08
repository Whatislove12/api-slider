import { useEffect, useState } from "react";
import { getImages } from "../request/images";
import { shuffle } from "lodash";
import { Loader } from "./Loader";

export const Slider = ({ imageNumber }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getImages()
      .then((images) => {
        const shuffledImages = shuffle(images);
        setImages(shuffledImages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
     setIsLoading(true);
  }, [imageNumber]);

  console.log(images, isLoading);

  if (error) {
    return (
      <>
        <h3>Error 404</h3>
        <p>{error.massage ?? 'Something went wrong'}</p>
      </>
    );
  }

  return (
    <div className="w-full h-full transition-transform duration-300 ease-in-out select-none relative">
      {isLoading ? <Loader /> : ""}
      <>
        {images[imageNumber] && (
          <img
            key={imageNumber}
            className="w-full h-full rounded-xl object-fill"
            src={images[imageNumber].images[0]}
            alt={images[imageNumber].name}
            onLoad={() => setIsLoading(false)}
          />
        )}
        {images[imageNumber] && (
          <p className="inline-block w-auto capitalize text-fuchsia-800">
            {images[imageNumber].name}
          </p>
        )}
      </>
    </div>
  );
};
