const Characters = require("./userSchema");

exports.create = async (data) => {
    try {
        console.log(data)
        const newCharacters = new Characters(data);
        const saveCharacters = newCharacters.save();
        if (!saveCharacters)
            throw new Error("Characters could not be saved");
        return { error: null }
    }
    catch (error) {
        return { error: error.message }
    }
}

exports.readAll = async () => {
    try {
        const characters = await Book.find({});
        if (!characters)
            throw new Error("Book not found");
        return { error: null, data: characters };
    } catch (error) {
        return { error: error.message, data: null }
    }
}

exports.read = async (id) => {
    try {
        const  character = await Character.findById(id);
        if (!character)
            throw new Error("Could not retrieve character");
        return { error: null, data: character };
    } catch (error) {
        return { error: error.message, data: null };
    }
}

exports.update = async (id, data) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, data, { new: true });
        if (!updatedBook)
            throw new Error("Failed to update book");
        return { error: null, data: updatedBook };
    } catch (error) {
        return { error: error.message, data: null };
    }
}

exports.deleteBook = async (id) => {
    try {
        const isDeleted = await Book.findByIdAndDelete(id);
        if (!isDeleted)
            throw new Error("Failed to delete book");
        return { error: null };
    } catch (error) {
        return { error: error.message };
    }
}