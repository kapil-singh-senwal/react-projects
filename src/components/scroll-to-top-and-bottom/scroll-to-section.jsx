import { useRef } from "react";
import classes from './index.module.css'

export default function ScrollToSection() {

  const data = [
    { label: "First Card" },
    { label: "Second Card" },
    { label: "Third Card" },
    { label: "Fourth Card" },
    { label: "Fifth Card" },
    { label: "Sixth Card" },
    { label: "Seventh Card" },
    { label: "Eighth Card" },
    { label: "Ninth Card" },
    { label: "Tenth Card" },
    { label: "Eleventh Card" },
    { label: "Twelfth Card" },
    { label: "Thirteenth Card" },
    { label: "Fourteenth Card" },
    { label: "Fifteenth Card" },
    { label: "Sixteenth Card" },
    { label: "Seventeenth Card" },
    { label: "Eighteenth Card" },
    { label: "Nineteenth Card" },
    { label: "Twentieth Card" },
    { label: "Twenty-First Card" },
    { label: "Twenty-Second Card" },
    { label: "Twenty-Third Card" },
    { label: "Twenty-Fourth Card" },
    { label: "Twenty-Fifth Card" },
  ];

  const containerRef = useRef(null);
  // Create an array of refs for each item
  const itemRefs = useRef([]);

  function handleScrollToIndex(index) {
    const container = containerRef.current;
    const target = itemRefs.current[index];

    if (container && target) {
      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      
      // Calculate position relative to container while accounting for current scroll
      // This is the most accurate cross-browser method
      const relativeTop = targetRect.top - containerRect.top + container.scrollTop;

      container.scrollTo({
        top: relativeTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.sectionContainer}>
        <div className={classes.scrollTriggerSection}>
          <h1>Scroll to Particular Section</h1>
          <button onClick={() => handleScrollToIndex(9)}>Scroll to 10th Card</button>
        </div>
        
        <div className={classes.cardsContainer} ref={containerRef}>
          {data.map((dataItem, index) => (
            <div
              key={dataItem.label}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`${classes.card} ${classes[`card-${index % 8}`]}`}
            >
              <h3>{dataItem.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
