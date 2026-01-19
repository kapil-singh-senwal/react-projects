import useFetch from "../use-fetch";
import classes from './index.module.css'
import { useRef } from "react";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    `https://dummyjson.com/products?limit=34`
  );
  const contentRef = useRef(null);

  function handleScrollToTop() {
    contentRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    contentRef.current.scrollTo({
      top: contentRef.current.scrollHeight,
      behavior: "smooth",
    });
  }

  if (error) {
    return (
      <div className={classes.loadingWrapper}>
        <h1 className={classes.error}>Error occurred! Please try again</h1>
      </div>
    );
  }

  if (pending) {
    return (
      <div className={classes.loadingWrapper}>
        <h1 className={classes.loading}>Loading! Please wait...</h1>
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.scrollContainer}>
        <div className={classes.header}>
          <h1>Scroll Feature</h1>
          <button className={classes.navBtn} onClick={handleScrollToBottom}>
            Go to Bottom ↓
          </button>
        </div>

        <div className={classes.contentSection} ref={contentRef}>
          <h3 className={classes.sectionTitle}>Top Section</h3>
          <ul className={classes["data-list"]}>
            {data && data.products && data.products.length
              ? data.products.map((item, index) => <li key={index}>{item.title}</li>)
              : null}
          </ul>
          <h3 className={classes.sectionTitle}>
            Bottom Section
          </h3>
        </div>

        <div className={classes.footer}>
          <button className={classes.navBtn} onClick={handleScrollToTop}>
            Go to Top ↑
          </button>
        </div>
      </div>
    </div>
  );
}
