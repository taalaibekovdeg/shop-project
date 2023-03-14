
import './App.css';
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom";
import Favorite from "./components/Favorite";
import Basket from "./components/Basket";
import Home from "./components/Home";

function App() {
  return (
    <div className="App bg-teal-100  h-[100vw]">
      <Header/>

        <Routes>
            <Route path={"/products"} element={<Home />}/>
            <Route path={"/favorite"} element={<Favorite />}/>
            <Route path={"/basket"} element={<Basket />}/>
        </Routes>
    </div>
  );
}

export default App;
