// Models for the Album Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Unique and specific error message.' });
    } else  {
        console.log('Success: Unique and specific success message.');
    }
});

// SCHEMA: Define the collection's schema.
const albumSchema = mongoose.Schema({
	title:  { type: String, required: true },
	artist: { type: String, required: true },
    date:   { type: Date, required: true },
	genre:  { type: String, required: true }
});

// Compile the model from the schema 
// by defining the collection name "albums".
const albums = mongoose.model('Albums', albumSchema);


// CREATE model *****************************************
const createAlbum = async (title, artist, date, genre) => {
    const album = new albums({ 
        title: title, 
        artist: artist, 
        date: date, 
        genre: genre 
    });
    return album.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveAlbums = async () => {
    const query = albums.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveAlbumByID = async (_id) => {
    const query = albums.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteAlbumById = async (_id) => {
    const result = await albums.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateAlbum = async (_id, title, artist, date, genre) => {
    const result = await albums.replaceOne({_id: _id }, {
        title: title, 
        artist: artist, 
        date: date, 
        genre: genre
    });
    return { 
        _id: _id, 
        title: title, 
        artist: artist, 
        date: date, 
        genre: genre
    }
}

// EXPORT the variables for use in the controller file.
export { createAlbum, retrieveAlbums, retrieveAlbumByID, updateAlbum, deleteAlbumById }