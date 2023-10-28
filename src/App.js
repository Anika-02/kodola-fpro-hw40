import Header from './components/Header/Header'
import LeftSideNavigation from "./components/LeftSideNavigation/LeftSideNavigation";
import CentralContainer from "./components/CentralContainer/CentralContainer";
function App() {
  return (
      <div>
        <Header/>
        <div className='main'>
          <LeftSideNavigation/>
          <CentralContainer/>
        </div>
      </div>
  );
}

export default App;