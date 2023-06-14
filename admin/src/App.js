import React, { useState } from "react";
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost ";
import UpdatePost from "./components/UpdatePost";
import NotFound from "./components/NotFound";

function App() {

  const [closedNav, setClosedNav] = useState(false);
  
  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");

  return (
    <div className="flex">
      <div className={`${getNavWidth()} h-screen bg-red-100 transition-width`}></div>

      <div className="flex-1 min-h-screen bg-blue-100">
        <button onClick={toggleNav}>
          {closedNav ? (
            <AiOutlineMenuUnfold size={25}/>
          ) : (
            <AiOutlineMenuFold size={25}/>
          )}

          <div className="max-w-screen-lg mx-auto"></div>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/create-post' element={<CreatePost/>} />
              <Route path='/update-post' element={<UpdatePost/>} />
              <Route path='/*' element={<NotFound/>} />
            </Routes>
        </button>
      </div>
      
    </div>
  );
}

export default App;
