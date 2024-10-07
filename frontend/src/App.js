// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';
// import products from './data/products.js'
import HomePage from './pages/HomePage.js'
import TopicsPage from './pages/TopicsPage.js'

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 


import AlbumsPage from './pages/AlbumsPage.js';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddAlbumPageForm from './pages/AddAlbumPageForm.js';
import EditAlbumPageForm from './pages/EditAlbumPageForm.js';

// If your schema requires SHORT data input, then use the TABLE design.
import EditAlbumPageTable from './pages/EditAlbumPageTable.js';
import AddAlbumPageTable from './pages/AddAlbumPageTable.js';

// Define the function that renders the content in Routes, using State.
function App() {

  const [album, setAlbumToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1><img src="android-chrome-192x192.png" alt="Mike Neguse" />Mike Neguse</h1>
            <p>Portfolio Project for CS 290 - Web Development</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/TopicsPage" element={<TopicsPage />} />

                    <Route path="/AlbumsPage" element={<AlbumsPage setAlbum={setAlbumToEdit}/>} />
                 
                    {/* Or these if your schema requires SHORT data input: */}
                     <Route path="/create" element={<AddAlbumPageForm />} />   
                     <Route path="/update" element={<EditAlbumPageForm albumToEdit={album} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Mike Neguse.</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;