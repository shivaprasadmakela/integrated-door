import './App.css';
import AllSections from './LandingPage/AllSections/allSections'
import { Routes, Route } from "react-router-dom";
import TeamMember from './LandingPage/teamMembers/teamMember';
import GallaryImages from './LandingPage/TabSection/GallaryImages';
import Services from './LandingPage/ServicesPage/Services';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllSections />} />
        <Route path='/team' element={<TeamMember />} />
        <Route path='/gallary' element={<GallaryImages />} />
        <Route path='/services' element={< Services />} />
      </Routes>
    </div>
  );
}

export default App;
