
import classes from './index.module.css'


export default function Modal({id, header, body, footer, onClose}){
    
    return <div id={id || "Modal"} className={classes.modal}>
        <div className={classes.content}>
            <div className={classes.header}>
                <span onClick={onClose} className={classes.closeModalIcon}>&times;</span>
                {header ? header : <h2>Header</h2>}
            </div>
            <div className={classes.body}>
                {
                    body ? body : <div> 
                        <p>This is our modal body</p>
                    </div>
                }
            </div>
            <div className={classes.footer}>
                {
                    footer ? footer : <h2>Footer</h2>
                }
            </div>
        </div>
    </div>
}