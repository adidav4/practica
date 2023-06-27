import React from 'react';
import '../node_modules/mini.css/dist/mini-default.min.css';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';

function App() {
  // return (
  //   <blockquote cite="Benjamin Franklin">
  //    Tell me and I forget, teach me and I may remember, involve me and I learn.
  //   </blockquote>
  // );
  return (
       <div className="container">
          <ProjectsPage />
      </div>
       );
}

export default App;