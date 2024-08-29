const fs = require("fs")

fs.readFile("assets/sample_data.txt", (err, data) => {
    if (err) throw err;

    const lines = data.split('\n');

    // Print the resulting array
    console.log(lines);
})