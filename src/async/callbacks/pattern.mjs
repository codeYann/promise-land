import fs from "node:fs";

// Wrong pattern that leads to remove file before reading it
fs.readFile("../../data/book.txt", "utf-8", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);

});

fs.unlinkSync("../../data/book.txt");

// Correct pattern
fs.readFile("../../data/book.txt", "utf-8", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);

    fs.unlink("../../data/book.txt", (err) => {
        if (err) {
            throw err;
        }
    });
});