import Menulist from "./menu-list";
import classes from './index.module.css'

export default function TreeView({menus = []}){

    return (
        <div className={classes.wrapper}>
            <div className={classes["tree-view-container"]}>
                <Menulist list={menus} />
            </div>
        </div>
    );
}