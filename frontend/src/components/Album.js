import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Album({ album, onEdit, onDelete }) {
    return (
        <tr>
            <td>{album.title}</td>
            <td>{album.artist}</td>
            <td>{album.date.slice(0,10)}</td>
            <td>{album.genre}</td>

            {/* Update these icons to something that matches your style. */}
            <td><FaEdit onClick={() => onEdit(album)} /></td>
            <td><MdDelete onClick={() => onDelete(album._id)} /></td>
        </tr>
    );
}

export default Album;