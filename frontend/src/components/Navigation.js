import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home</Link>
        <Link to="/TopicsPage">Topics Page</Link>
        <Link to="/AlbumsPage">Albums Page</Link>
    </nav>
  );
}

export default Navigation;
