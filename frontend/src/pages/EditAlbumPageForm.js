import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditAlbumPageForm = ({ albumToEdit }) => {
 
    const [title, setTitle] = useState(albumToEdit.title);
    const [artist, setArtist] = useState(albumToEdit.artist);
    const [date, setDate] = useState(albumToEdit.date);
    const [genre, setGenre] = useState(albumToEdit.genre);
    
    const redirect = useNavigate();

    const editAlbum = async () => {
        const response = await fetch(`/albums/${albumToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: title,
                artist: artist,
                date: date,
                genre: genre
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`The album information has successfully been edited.`);
        } else {
            const errMessage = await response.json();
            alert(`There was an error and the album information could not be updated. status code = ${response.status}. ${errMessage.Error}`);
        }
        redirect("/AlbumsPage");
    }

    return (
        <>
        <article>
            <h2>Edit a album</h2>
            <p>Paragraph about this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which album are you adding?</legend>
                    <label for="title">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />
                    
                    <label for="artist">Artist</label>
                    <input
                        type="text"
                        value={artist}
                        onChange={e => setArtist(e.target.value)} 
                        id="artist" />

                    <label for="date">Date Released</label>
                    <input
                        type="date"
                        value={date.slice(0,10)}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="genre">Genre</label>
                    <input
                        type="text"
                        value={genre}
                        onChange={e => setGenre(e.target.value)} 
                        id="language" />

                    <label for="submit">
                    <button
                        onClick={editAlbum}
                        id="submit"
                    >Save</button>
                    </label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditAlbumPageForm;