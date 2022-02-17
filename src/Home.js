import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="HomePage">
      <form>
        <input type="text" placeholder="Enter your name..." required />

        <Link to="/questions">
          <button type="submit">Enter</button>
        </Link>
      </form>
    </div>
  );
}
export default Home;
