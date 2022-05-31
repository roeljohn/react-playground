import React from "react"; 

import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import ResultGoal from './Components/ResultGoal'
import './App.css';
import Car from './Components/Car';
import Todo from './Pages/Todo';
import { getAllTodo } from './actions/todo';



function App() {
  const state = useSelector((state) => state.todos);
  console.log('useeffect', state)
  const dispatch = useDispatch();
  const [todos, setTodo] = useState(state.todos);
  useEffect(() => {
    dispatch(getAllTodo());
  }, [todos]); 
  return (
    <Router>
      <Routes>
          <Route index element={<Todo />} />
      </Routes>
     </Router>
  );
}

export default App;
