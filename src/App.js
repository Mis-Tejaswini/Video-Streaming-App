import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home  from "./Components/Home";
import Navbar from './Components/navbar';
import UploadVideos from './Components/uploadVideos';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
       <Navbar/>  
        <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route

                        path="/uploadVideos"
                        element={<UploadVideos />}
                    />
                     <Route
                    
                    path="/SignIn"
                    element={<SignIn />}
                />
                <Route
                    
                    path="/SignIn"
                    element={<Register />}
                />       

                    </Routes>
                    </Router>

      </div>
    </div>
  );
}

export default App;
