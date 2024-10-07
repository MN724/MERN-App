import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddAlbumPageTable = () => {

    const [title, setTitle]       = useState('');
    const [year, setYear]         = useState('');
    const [language, setLanguage] = useState('');
    
    const redirect = useNavigate();

    const addAlbum = async () => {
        const newAlbum = { title, year, language };
        const response = await fetch('/albums', {
            method: 'post',
            body: JSON.stringify(newAlbum),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`helpful adding message`);
        } else {
            alert(`helpful adding message = ${response.status}`);
        }
        redirect("/");
    };


    return (
        <>
        <article>
            <h2>Add a album</h2>
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
                            onClick={addAlbum}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddAlbumPageTable;