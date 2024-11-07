import './App.css';
import AllSections from './LandingPage/AllSections/allSections'
import { Routes, Route } from "react-router-dom";
import TeamMember from './LandingPage/teamMembers/teamMember';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllSections />} />
        <Route path='/team' element={<TeamMember />} />
      </Routes>
    </div>
  );
}

export default App;
