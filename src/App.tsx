import React from 'react';
import 'App.css';
import MyAppBar from 'components/Navigation/MyAppBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'components/Routes/routes';

const App: React.FC = (props) => {
  return (
    <Router>
      <div>
        <MyAppBar>
          <Routes/>
        </MyAppBar>
      </div>
    </Router>
  );
}

export default App;
