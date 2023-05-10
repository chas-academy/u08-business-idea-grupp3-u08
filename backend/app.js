const express = require("express")
const cors = require("cors")
const app = express()
const {create, readAll, read, update, deleteChar} = require("./userCRUD")

const User = require("./userSchema")

const user1 = User.find("email")
// const char1 = user1.Characters[1]

const mongoose = require("mongoose");
const dbURI = "mongodb+srv://chatlabsTeam:nospamarenointhechaterino@charlabs.icuqwds.mongodb.net/Chatlabs";
// connect to database
mongoose.connect(dbURI, { useNewUrlParser: true });
const db = mongoose.connection;
// if error
db.on("error", (err) => {
    console.error(`err: ${err}`);
}); // if connected
db.on("connected", (err, res) => {
    console.log("Connected to database");
});


// create a server-PORT
const PORT = 4000;
// const PORT = process.env.PORT || 4000;

// cors är bra så att vi kan ha server och client isär
app.use(cors());
// parse json objects
app.use(express.json());
// parse url encoded objects- data sent through the url
app.use(express.urlencoded({ extended: true }));

app.post("/create", async (req, res) => {
    //check if req.body is empty
    if (!Object.keys(req.body).length) {
        res.status(400).json({
            message: "Request body cannot be empty",
        });
    }
    const { email, Characters} = req.body;
    const character = await create({email, Characters });

    if (character.error) {
        res.status(500).json({
            message: character.error,
        });
    }
    else {
        res.status(201).json({
            message: "New character record created",
        });
    }
});

// app.get("/characters", async (req, res) => {
//     const characters = await readAll();

//     if (books.error) {
//         res.status(500).json({
//             message: error.message,
//             books: books.data,
//         });
//     }
//     else {
//         res.status(200).json({
//             message: "success",
//             books: books.data,
//         });
//     }
// });

// app.get("/charprofile/:CharID", async (req, res) => {
//     const char1 = await read(req.params.CharID);
//     if (character.error) {
//         res.status(500).json({
//             message: character.error,
//             character: character.data,
//         });
//     }
//     else {
//         res.status(200).json({
//             message: "success",
//             character: character.data,
//         });
//     }
// });

// app.put("/books/:bookID", async (req, res) => {
//     if (!Object.keys(req.body).length) {
//         res.status(400).json({
//             message: "Request body cannot be empty",
//             book: null,
//         });
//     }

//     const book = await update(req.params.bookID, req.body);
//     if (book.error) {
//         res.status(500).json({
//             message: book.error,
//             book: book.data,
//         });
//     }
//     else {
//         res.status(200).json({
//             message: "success",
//             book: book.data,
//         });
//     }
// });

// app.delete("/books/:bookID", async (req, res) => {
//     const isDeleted = await deleteBook(req.params.bookID);
//     if (isDeleted.error) {
//         res.status(500).json({
//             message: isDeleted.error,
//         });
//     }
//     else {
//         res.status(200).json({
//             message: "Deleted Successfully",
//         });
//     }
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
