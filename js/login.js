
async function authenticate_user(ID, pass){
    let data = await get_data_from_api();

    let current_person = data[ID - 1]
    
    if (current_person){
        if (ID == current_person.ID){
            if (pass == current_person.Password){
                return true
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}

async function call_authenticator(){
    let user_id = document.querySelector("#user_id")
    let user_pass = document.querySelector("#user_pass")
    let ID = user_id.value;
    let pass = user_pass.value

    let auth = await authenticate_user(ID, pass)

    if (auth){
        console.log("PASS");
        window.open(`person.html?ID=${ID}`, '_blank');
    }
    else{
        document.getElementsByClassName("incorrect_password")[0].style.display = "block";
        console.log("FAIL");
    }
}
