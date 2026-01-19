import { useState, useEffect } from "react";
import classes from './index.module.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      setImages(data);
      if (data) setImages(data);
      setLoading(false);
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url != "") fetchImages(url);
  }, [url, limit]);

  if (loading) {
    return <div>Loading data please wait...</div>;
  }

  if (errorMsg) {
    return <div>Error Occured: {errorMsg}</div>;
  }

  function handlePrev() {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function handleNext() {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className={classes.centerContainer}>
    <div className={classes.container}>
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className={classes.arrow + " " + classes.arrowLeft}
      />
      {images && images.length
        ? images.map((imageItem, index) => {
            return (
              <img
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.author}
                className={
                  index === currentSlide
                    ? classes.currentImage
                    : classes.currentImage + " " + classes.hideCurrentImage
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className={classes.arrow + " " + classes.arrowRight}
      />
      <span className={classes.circleIndicators}>
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  index === currentSlide
                    ? classes.currentIndicator
                    : classes.currentIndicator + " " + classes.inactiveCurrentIndicator
                }
                onClick={() => {
                  setCurrentSlide(index);
                }}
              ></button>
            ))
          : null}
      </span>
    </div>
            <h1> Image Slider</h1>
    </div>
  );
}
