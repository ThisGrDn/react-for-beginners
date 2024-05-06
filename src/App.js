import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Movie from "./components/Movie";
function App() {
    return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element = {<Detail/>} />
        </Routes>
    </Router>
    );
}

export default App;