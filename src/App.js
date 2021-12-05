import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ExercisesList from './components/ExercisesList'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import CreateUser from "./components/CreateUser";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/">ExercisesList</Link>
          <Link to="/edit/:id">EditExercise</Link>
          <Link to="/create">CreateExercise</Link>
          <Link to="/user">CreateUser</Link>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<ExercisesList/>} />
            <Route path="/edit/:id" element={<EditExercise/>} />
            <Route path="/create" element={<CreateExercise/>} />
            <Route path="/user" element={<CreateUser/>} />
          </Routes>
        </main>
        <footer>footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
