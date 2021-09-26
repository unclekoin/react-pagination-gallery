import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Gallery from './pages/gallery';
import Home from './pages/home';
import Photo from './pages/photo';

function App() {
  

  return (
    <div className="container pt-5 pb-5">
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/gallery" exact component={Gallery} />
      <Route path="/gallery/:photoId" component={Photo} />
    </div>
  );
}

export default App;
