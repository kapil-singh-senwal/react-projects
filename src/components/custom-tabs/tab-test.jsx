import Tabs from "./tabs";
import classes from './index.module.css'

function RandomComponent(){
    return <h1>Some random component</h1>
}

export default function Tabtest(){

    const tabs = [
        {
            label : "Tab 1",
            content : <div>This is content for Tab 1</div>
        },
        {
            label : "Tab 2",
            content : <div>This is content for Tab 2</div>
        },
        {
            label : "Tab 3",
            content : <RandomComponent />
        },
    ]

    function handleChange(currentTabIndex){

    }

    return <Tabs tabsContent={tabs} onChange={handleChange}/>

}