import React from 'react';
import Album from './Album';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function AlbumList({ albums, onDelete, onEdit }) {
    return (
        <table id="albums">
            <caption>Add and Edit Albums</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Date</th>
                    <th>Genre</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {albums.map((album, i) => 
                    <Album 
                        album={album} 
                        key={i}
                        onEdit={onEdit} 
                        onDelete={onDelete}
                    />)}
            </tbody>
        </table>
    );
}

export default AlbumList;
