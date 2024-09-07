const express = require("express")
const app = express()
const cors = require("cors");
const multer = require('multer');
const port = 3000
const fs = require("fs").promises
const path = require('path');




app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const file_path = path.join(__dirname, "assets", "sample_data.json")
console.log(file_path)

async function read_file_data() {
    try {
        const data = await fs.readFile(file_path, 'utf8'); // Read file with 'utf8' encoding
        return data; // Return file data
    } catch (err) {
        console.error(err); // Log the error
        throw err; // Rethrow error for handling in the route
    }
}

async function write_to_file(data) {
    try {
        await fs.writeFile(file_path, data, 'utf8'); // Write file with 'utf8' encoding
        console.log("File Written");
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function get_last_ID() {

    let data = await read_file_data();
    JSON_data = JSON.parse(data)

    if (JSON_data.length > 0) {

        let final_index = JSON_data.length - 1


        return JSON_data[final_index]["ID"]
    }
    else {
        return -1
    }

}

app.get("/api/get_all_people", async (req, res) => {
    try {
        let data = await read_file_data(); // Await the promise from read_file_data

        let final_ID = await (get_last_ID());

        res.status(200).send(JSON.parse(data)); // Send file data in the response
    } catch (err) {
        res.status(500).send("An Error Occurred"); // Send error response
    }
});

app.post("/api/add_one_person", async (req, res) => {
    try {
   
        let data = await read_file_data(); // Await the promise from read_file_data

        let final_ID = await (get_last_ID());
        final_ID = (final_ID >= 0) ? final_ID : 0;

        const now = new Date();
        const dateTimeString = now.toLocaleString();



        let new_person = req.body
        new_person["ID"] = final_ID + 1
        new_person["Picture"] = `${final_ID + 1}.png`
        new_person["CreatedAt"] = dateTimeString

        let JSON_data = JSON.parse(data)

        JSON_data.push(new_person)

        write_to_file(JSON.stringify(JSON_data))

        res.status(200).send("Added successfully");

    } catch (err) {
        res.status(500).send("An Error Occurred", err);
    }
});




function replace_values(object1, object2) {

    for (const key in object2) {

        if (object1.hasOwnProperty(key)) {

            object1[key] = object2[key];
        }
    }
}



app.put("/api/update_one_person/:ID", async (req, res) => {

    let data = await read_file_data();


    const now = new Date();
    const dateTimeString = now.toLocaleString();

    let new_values = req.body

    let JSON_data = JSON.parse(data)

    replace_values(JSON_data[req.params.ID - 1], new_values)
    JSON_data[req.params.ID - 1]["UpdatedAt"] = dateTimeString


    write_to_file(JSON.stringify(JSON_data))



    res.status(200).send("Updated successfully");

   
});


function remove_ID(objects, idToRemove) {
    let data =  objects.filter(obj => {
        
        if (obj.ID == idToRemove){
            
            return false
        }
        else{
            return obj
        }
        
    });
    
    return data
}


app.delete("/api/delete_one_person/:ID", async (req, res) => {
    let data = await read_file_data();
    let JSON_data = JSON.parse(data)

    // console.log(JSON_data)
    JSON_data = remove_ID(JSON_data,req.params.ID)
    // console.log(JSON_data)


    write_to_file(JSON.stringify(JSON_data))
    res.status(200).send("Updated successfully");

})









app.listen(port, () => {
    console.log(`App is listening to http://localhost:${port}`)
})