import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import PhotoAlbum from './PhotoAlbum';
const Photo = React.lazy(() => import('./Photo'));

const imageIds = ["111", "211", "311", "351", "678"];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/">Home</Link> | <Link to="/photos">Fotos</Link>
          </nav>
        </header>

        <main>
          <React.Suspense fallback={<div>loading ....</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photos">
                <Route path="" element={<PhotoAlbum ids={imageIds}/>} />
                <Route path=":id" element={<Photo />} />
              </Route>
            </Routes>
          </React.Suspense>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
