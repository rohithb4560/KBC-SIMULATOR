import React from 'react';
import './style.css';

import Home from './Home';
import Quiz from './Quiz';
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
