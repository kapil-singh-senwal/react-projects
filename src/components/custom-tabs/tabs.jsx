import { useState } from "react";
import classes from './index.module.css'

export default function Tabs({tabsContent, onChange}) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.heading}>
        {tabsContent.map((tabItem, index) => (
          <div className={`${classes.tabItem} ${currentTabIndex === index ? classes.active : ""}`} onClick={() => handleOnClick(index)} key={tabItem.label}>
            <span className={classes.label}>{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className={classes.content}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
