import useLocalStorage from "./useLocalStorage";
import classes from './index.module.css'

export default function LightDarkMode(){

    const[theme,setTheme] = useLocalStorage('theme', 'dark')

    function handleToggleTheme(){
        setTheme(theme === 'light' ? "dark" : "light")
    }

    console.log(theme)
    return(
    <div className={classes["light-dark-mode"]} data-theme={theme}>
        <div className={classes["container"]}>
            <p>Hello World!</p>
            <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
    </div>
    );
}