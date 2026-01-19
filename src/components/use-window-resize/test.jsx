import useWindowResize from ".";
import classes from './index.module.css'
export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;

  return (
    <div className={classes.wrapper}>
      <div className={classes.resizeCard}>
        <h1>Window Resize Hook</h1>
        <div className={classes.statsSection}>
          <div className={classes.statItem}>
            <p>Width</p>
            <h3>{width}px</h3>
          </div>
          <div className={classes.statItem}>
            <p>Height</p>
            <h3>{height}px</h3>
          </div>
        </div>
        <p className={classes.hint}>Resize the browser window to see the update!</p>
      </div>
    </div>
  );
}
