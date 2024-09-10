import './App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './screens/main/Main';
import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import MainCompt from './screens/company/MainCompt';
import MainPortfolio from './screens/portfolio/MainPortfolio';
import MainContact from './screens/contact/MainContact';
import PortfolioDetail from './screens/portfolio/PortfolioDetail';

function App() {

  return (
      <div className="App">
        <RecoilRoot>

          <Header/>
          
          <div className='Main'>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/company" element={<MainCompt/>}/>
              <Route path="/portfolio" element={<MainPortfolio/>}/>
              <Route path="/portfoliodetail" element={<PortfolioDetail/>}/>
              <Route path="/contact" element={<MainContact/>}/>
            </Routes>
          </div>
        </RecoilRoot>
      </div>
  );
}

export default App;
