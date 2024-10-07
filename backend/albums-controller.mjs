// Controllers for the Album Collection

import 'dotenv/config';
import express from 'express';
import * as albums from './albums-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/albums', (req,res) => { 
    albums.createAlbum(
        req.body.title, 
        req.body.artist, 
        req.body.date, 
        req.body.genre
        )
        .then(album => {
            console.log(`"${album.title}" was added to the collection.`);
            res.status(201).json(album);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: `"${albums.title}" could not be added to the collection. Please check that all required parameters have been included.`});
        });
});


// RETRIEVE controller ****************************************************
app.get('/albums', (req, res) => {
    albums.retrieveAlbums()
        .then(albums => { 
            if (albums !== null) {
                console.log(`All albums were retrieved from the collection.`);
                res.json(albums);
            } else {
                res.status(404).json({ Error: 'There are no albums to be retrieved from the collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Please make sure that the syntax for the get request is entered correctly.' });
        });
});


// RETRIEVE by ID controller
app.get('/albums/:_id', (req, res) => {
    albums.retrieveAlbumByID(req.params._id)
    .then(album => { 
        if (album !== null) {
            console.log(`"${album.title}" was retrieved, based on its ID.`);
            res.json(album);
        } else {
            res.status(404).json({ Error: 'There was no album with the requested id found on the database.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Please make sure that the correct id was included in the request.' });
    });

});


// UPDATE controller ************************************
app.put('/albums/:_id', (req, res) => {
    albums.updateAlbum(
        req.params._id, 
        req.body.title, 
        req.body.artist,
        req.body.date, 
        req.body.genre
    )
    .then(album => {
        console.log(`"${album.title}" was updated.`);
        res.json(album);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Please make sure to fill out all parameters for the document.' });
    });
});


// DELETE Controller ******************************
app.delete('/albums/:_id', (req, res) => {
    albums.deleteAlbumById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} album was deleted.`);
                res.status(200).send({ Success: 'Unique and specific success message.' });
            } else {
                res.status(404).json({ Error: 'The movie requested for deletion does not exist.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Please make sure that the correct id has been entered.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});