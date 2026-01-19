import './App.css';
import ScrollToSection from './components/scroll-to-top-and-bottom/scroll-to-section';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import UseWindowResizeTest from './components/use-window-resize/test';
import UseOnClickOutsideTest from './components/use-outside-click/test';
// import FeatureFlagGlobalState from "./components/feature-flag/context"
// import FeatureFlags from './components/feature-flag';
import UseFetchHookTest from './components/use-fetch/test';
import TicTacToe from './components/tic-tac-toe';
import SearchAutoComplete from './components/search-autocomplete-withapi';
import GithubProfileFinder from './components/github-profile-finder';
import ModalTest from './components/custom-modal-popup/modal-test';
import Tabtest from './components/custom-tabs/tab-test';
import ScrollIndicator from './components/scroll-indicator';
import LightDarkMode from './components/light-dark-mode';
import QRCodeGenerator from './components/qr-code-generator';
import menus from './components/tree-view/data';
import TreeView from './components/tree-view';
import LoadMoreData from './components/load-more-data';
import Accordion from './components/accordion';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      <div className="component-container">
        <Accordion />
      </div>
      <hr />
      <div className="component-container">
        <RandomColor />
      </div>
      <hr />
      <div className="component-container">
        <StarRating noOfStars={10} />
      </div>
      <hr />
      <div className="component-container">
        <ImageSlider
          url={'https://picsum.photos/v2/list'}
          limit={'10'}
          page={'1'} />
      </div>
      <hr />
      <div className="component-container">
        <LoadMoreData />
      </div>
      <hr />
      <div className="component-container">
        <TreeView menus={menus} />
      </div>
      <hr />
      <div className="component-container">
        <QRCodeGenerator />
      </div>
      <hr />
      <div className="component-container">
        <LightDarkMode />
      </div>
      <hr />
      <div className="component-container full-width-container">
        <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
      </div>
      <hr />
      <div className="component-container">
        <Tabtest />
      </div>
      <hr />
      <div className="component-container">
        <ModalTest />
      </div>
      <hr />
      <div className="component-container">
        <GithubProfileFinder />
      </div>
      <hr />
      <div className="component-container">
        <SearchAutoComplete />
      </div>
      <hr />
      <div className="component-container">
        <TicTacToe />
      </div>
      <hr />
      <div className="component-container">
        <UseFetchHookTest />
      </div>
      <hr />
      <div className="component-container">
        <UseOnClickOutsideTest />
      </div>
      <hr />
      <div className="component-container">
        <UseWindowResizeTest />
      </div>
      <hr />
      <div className="component-container">
        <ScrollToTopAndBottom />
      </div>
      <hr />
      <div className="component-container">
        <ScrollToSection />
      </div>
      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}
    </div>
  );
}

export default App;
