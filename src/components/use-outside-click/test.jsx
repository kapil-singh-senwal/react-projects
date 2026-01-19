import { useState ,useRef } from "react"
import useOutsideClick from ".";
import classes from './index.module.css'



export default function UseOnClickOutsideTest(){
    const ref = useRef();
    const [showContent, setShowContent] = useState(false)
    useOutsideClick(ref, ()=> setShowContent(false))

    return <div className={classes.wrapper}>
        {
            showContent ? (
                <div ref={ref} className={classes.modalContent}>
                    <h1>Outside Click Hook</h1>
                    <p>Click anywhere outside this box to close it. Clicking inside won't do anything!</p>
                </div>
            ) : (
                <button className={classes.triggerBtn} onClick={() => setShowContent(true)}>
                    Show Content
                </button>
            )
        }
    </div>
}