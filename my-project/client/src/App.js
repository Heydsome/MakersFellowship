import './index.css';
import Button from './components/Button';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NewProject from './components/NewProject';
function App() {


  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header title="NB" subtitle="Where Startups Connect" />
              
                  <Button text="Create MVP" onClick={()=>{window.location.href ='/newProject'}} />
                  <Button text="Search Projects" />
                
                
              </>
            }
          />
          <Route
            path="/newProject"
            element={
              <>
                <NewProject></NewProject>
              </>
            }
          />
          <Route
            path="/Projects"
            element={
              <>
                
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
