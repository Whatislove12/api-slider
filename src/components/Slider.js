  import { useEffect, useState } from "react";
  import { getImages } from "../request/images";
  import { shuffle } from "lodash";

  export const Slider = ({ imageNumber }) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [key, setKey] = useState(0);

    useEffect(() => {
      getImages()
        .then((images) => {
          const shuffledImages = shuffle(images);
          setImages(shuffledImages);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }, []);

    useEffect(() => {
      setKey((prevKey) => prevKey+1);
      setIsLoading(true)
    }, [imageNumber] )

    console.log(images, isLoading)

    return (
      <div className="w-full h-full transition-transform duration-300 ease-in-out select-none relative">
        {isLoading ? (
            <p className="absolute left-2/4 top-2/4 -translate-x-2/4 z-10 text-4xl">Loading...</p>
        ) : ""}
        <>
            {images[imageNumber] && (
              <img
                key={key}
                className="w-full h-full rounded-xl"
                src={`${images[imageNumber].images}?v=${key}`}
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
