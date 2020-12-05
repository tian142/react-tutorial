import React from 'react';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import About from './About';
import POPOSDetails from './POPOSDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Title />
      <Route exact path="/" component={POPOSList} />
      <Route path="/about" component={About} />
      <Route path="/details/:id" component={POPOSDetails} />
      <Footer />
    </Router>
  );
};

export default App;
