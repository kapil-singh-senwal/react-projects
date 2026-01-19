import FeatureFlagGlobalState, { FeatureFlagsContext } from "./context"
import RandomColor from '../random-color'
import Accordion from '../accordion';
import LightDarkMode from '../light-dark-mode';
import TicTacToe from '../tic-tac-toe';
import TreeView from '../tree-view';
import menus from "../tree-view/data";
import { useContext } from "react";

    

export default function FeatureFlags(){
    
    const {loading, enabledFlags} = useContext(FeatureFlagsContext)
    const componentsToRender = [
        {
            key : "showLightAndDarkMode",
            component : <LightDarkMode/>
        },
        {
            key : "showTicTacToeBoard",
            component : <TicTacToe/>
        },
        {
            key : "showRandomColorGenerator",
            component : <RandomColor/>
        },
        {
            key : "showAccordian",
            component : <Accordion />
        },
        {
            key : "showTreeView",
            component : <TreeView menus={menus}/>
        }
    ]

    function checkEnabled(getCurrentKey){
        return enabledFlags[getCurrentKey]
    }

    if(loading) return <h1>Loading data please wait...</h1>

    return <div>
        <h1> 
            Feature Flags
        </h1>
        {
            componentsToRender.map(componentItem=> checkEnabled(componentItem.key) ? componentItem.component : null)
        }
    </div>
}