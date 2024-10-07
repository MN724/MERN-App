import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditAlbumPageTable = ({ albumToEdit }) => {
 
    const [title, setTitle]       = useState(albumToEdit.title);
    const [year, setYear]         = useState(albumToEdit.year);
    const [language, setLanguage] = useState(albumToEdit.language);
    
    const redirect = useNavigate();

    const editAlbum = async () => {
        const response = await fetch(`/albums/${albumToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                year: year, 
                language: language
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`helpful editing message`);
        } else {
            const errMessage = await response.json();
            alert(`helpful editing message ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit a album</h2>
            <p>Paragraph about this page.</p>
            <table id="albums">
                <caption>Which album are you adding?</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="title">Album title</label>
                        <input
                            type="text"
                            placeholder="Title of the album"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            id="title" />
                    </td>

                    <td><label for="year">Year released</label>
                        <input
                            type="number"
                            value={year}
                            placeholder="Year of the album"
                            onChange={e => setYear(e.target.value)} 
                            id="year" />
                    </td>

                    <td><label for="language">Language</label>
                        <input
                            type="text"
                            placeholder="Primary language of the album"
                            value={language}
                            onChange={e => setLanguage(e.target.value)} 
                            id="language" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editAlbum}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditAlbumPageTable;