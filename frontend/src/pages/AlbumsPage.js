import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AlbumList from '../components/AlbumList';
import { Link } from 'react-router-dom';

import { IoIosAddCircleOutline } from "react-icons/io";

function AlbumsPage({ setAlbum }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [albums, setAlbums] = useState([]);

    // RETRIEVE the entire list of albums
    const loadAlbums = async () => {
        const response = await fetch('/albums');
        const albums = await response.json();
        setAlbums(albums);
    } 
    

    // UPDATE a single album
    const onEditAlbum = async album => {
        setAlbum(album);
        redirect("/update");
    }


    // DELETE a single album  
    const onDeleteAlbum = async _id => {
        const response = await fetch(`/albums/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/albums');
            const albums = await getResponse.json();
            setAlbums(albums);
        } else {
            console.error(`The specified album (ID = ${_id}) could not be deleted. status code = ${response.status}`)
        }
    }

    // LOAD all the albums
    useEffect(() => {
        loadAlbums();
    }, []);

    // DISPLAY the albums
    return (
        <>
            <h2>List of Albums</h2>
            <p>Paragraph about this page.</p>
            <AlbumList 
                albums={albums} 
                onEdit={onEditAlbum} 
                onDelete={onDeleteAlbum} 
            />
            <Link to="/create"><IoIosAddCircleOutline />Add Album</Link>
        </>
    );
}

export default AlbumsPage;