import MenuItem from "./menu-item";
import classes from './index.module.css'

export default function Menulist({ list = [] }) {
  return (
    <ul className={classes["menu-list-container"]}>
      {list && list.length
        ? list.map((listItem) => <MenuItem key={listItem.label} item={listItem} />)
        : null}
    </ul>
  );
}
