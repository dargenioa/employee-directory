import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <Router>
          <NavBar />
          <Wrapper>
            {/* insert search path here using Route */}
          </Wrapper>
    </Router>

  );
}

export default App;
