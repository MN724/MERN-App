import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddAlbumPageForm = () => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [date, setDate] = useState('');
    const [genre, setGenre] = useState('');
    
    const redirect = useNavigate();

    const addAlbum = async () => {
        const newAlbum = { title, artist, date, genre };
        const response = await fetch('/albums', {
            method: 'post',
            body: JSON.stringify(newAlbum),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`The album has successfully added to the table.`);
            redirect("/AlbumsPage");
        } else {
            alert(`An error occurred and the album was not added to the table. Status Code = ${response.status}`);
            redirect("/AlbumsPage");
        }
    };


    return (
        <>
        <article>
            <h2>Add a album</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which album are you adding?</legend>
                    <label for="title">Album title</label>
                    <input
                        type="text"
                        placeholder="Title of the album"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />
                    <label for="artist">Artist</label>
                    <input
                        type="text"
                        value={artist}
                        placeholder="Artist of the album"
                        onChange={e => setArtist(e.target.value)} 
                        id="artist" />

                    <label for="date">Date</label>
                    <input
                        type="date"
                        placeholder="Release date of the album"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />
                    <label for="genre">Genre</label>
                    <input
                        type="text"
                        placeholder="Genre of the album"
                        value={genre}
                        onChange={e => setGenre(e.target.value)} 
                        id="genre" />
                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addAlbum}
                        id="submit"
                    >Add</button>
                    </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddAlbumPageForm;