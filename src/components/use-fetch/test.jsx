import useFetch from ".";
import classes from './index.module.css'

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    `https://dummyjson.com/products?limit=17`
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.hookContainer}>
        <div className={classes.header}>
          <h1>Use Fetch Hook</h1>
        </div>
        <div className={classes.contentSection}>
          {pending ? <div className={classes.loading}>Pending ! Please wait...</div> : null}
          {error ? <div className={classes.error}>{error}</div> : null}
          <ul className={classes["data-list"]}>
            {data && data.products && data.products.length
              ? data.products.map((productItem) => (
                  <li key={productItem.id}>{productItem.title}</li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}
