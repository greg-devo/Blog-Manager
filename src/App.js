import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigate, Route, Routes} from "react-router-dom";
import BlogList from "./components/BlogList";
import ViewPost from "./components/ViewPost";
import NavBar from "./components/NavBar";
import CreatePost from "./components/CreatePost";

function App() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/posts" element={<BlogList/>}/>
                <Route path="/post/:id" element={<ViewPost/>}/>
                <Route path="addPost" element={<CreatePost/>}/>
                <Route path="*" element={<Navigate to="/posts"/>}/>
            </Routes>
        </div>
    );
}

export default App;
