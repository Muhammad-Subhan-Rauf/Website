const base_url = "http://localhost:3000";

async function get_data_from_api() {
    try {
        const response = await fetch(`${base_url}/api/get_all_people`, { method: "GET" });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function add_person(data) {

    try {


        const response = await fetch(`${base_url}/api/add_one_person`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return res.text()


    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function update_person(data, ID) {

    try {


        const response = await fetch(`${base_url}/api/update_one_person/${ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.text()


    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function delete_person(ID) {

    try {


        const response = await fetch(`${base_url}/api/delete_one_person/${ID}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.text()


    } catch (error) {
        console.error('Error fetching data:', error);
    }
}





