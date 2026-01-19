import { useState } from "react";
import Menulist from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa';
import classes from './index.module.css';

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false);

  function handleToggleChildren(){
    setDisplayCurrentChildren(!displayCurrentChildren)
  }

  return (
    <li>
      <div className={classes["menu-item"]}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? <span onClick={()=>handleToggleChildren()}>
          {
             displayCurrentChildren ? <FaMinus color="#fff" size={12} /> : <FaPlus color="#fff" size={12} />
          }
          </span> : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren? (
        <Menulist list={item.children} />
      ) : null}
    </li>
  );
}
