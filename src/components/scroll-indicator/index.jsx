import { useEffect, useState, useRef } from "react";
import classes from './index.module.css'

export default function ScrollIndicator({ url }) {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const containerRef = useRef(null);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setdata(data.products);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorMessage(e.message);
    }
  }

  function handleScrollPercentage() {
    if (!containerRef.current) return;

    const element = containerRef.current;
    const { top, height } = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Start calculating when the top of the container hits the top of viewport
    // End calculation when the bottom of the container hits the bottom of viewport
    // Progress = (distance scrolled past top) / (total height - viewport height)
    
    const scrolledPastTop = -top;
    const scrollableDistance = height - viewportHeight;

    if (scrolledPastTop <= 0) {
      setScrollPercentage(0);
    } else if (scrolledPastTop >= scrollableDistance) {
      setScrollPercentage(100);
    } else {
      setScrollPercentage((scrolledPastTop / scrollableDistance) * 100);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  if(errorMessage){
    return <div className={classes.error}>Error ! {errorMessage}</div>
  }

  if(loading){
    return <div className={classes.loading}>Loading data Please Wait...</div>
  }

  return (
    <div ref={containerRef} className={classes.wrapper}>
      <div className={classes["top-container"]}>
        <h1>Custom Scroll Indicator</h1>
        <div className={classes["scroll-percentage-tracking-container"]}>
          <div
            className={classes["current-progress-bar"]}
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className={classes["data-container"]}>
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
