function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        ID: params.get('ID'),
    };
}


let current_user_id;
let current_user_data;
let flag = false

async function get_current_user() {
    if (!flag){
        const queryParams = getQueryParams();
    
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
    
        current_user_id = queryParams.ID;

        flag = true
    }

    let data = await get_data_from_api()

    let current_user = data[current_user_id - 1]

    current_user_data = current_user

    return current_user
}

async function change_default_data() {
    let current_user = get_current_user();


    
    const user_img = document.querySelector(".user_card .profile_picture img")

    const user_name = document.querySelector(".user_card .user_information #user_name")
    const user_email = document.querySelector(".user_card .user_information #user_email")
    const user_ID = document.querySelector(".user_card .user_information #user_ID")

    user_name.innerHTML = `${current_user.Fname} ${current_user.Lname}`
    user_email.innerHTML = `Email: ${current_user.Email}`
    user_ID.innerHTML = `ID: ${current_user.ID}`

    user_img.setAttribute("src", `assets/user_images/${current_user.Picture}`)

}

change_default_data()



function fill_default_values(){
    document.getElementsByClassName("user_details")[0].style.display = "none"
    document.getElementsByClassName("user_details_edit")[0].style.display = "block"

    let Fname_field = document.getElementById("edit_Fname_field")
    let Lname_field = document.getElementById("edit_Lname_field")
    let email_field = document.getElementById("edit_email_field")
    let pass_field = document.getElementById("edit_pass_field")

    Fname_field.value = current_user_data.Fname
    Lname_field.value = current_user_data.Lname
    email_field.value = current_user_data.Email
    pass_field.value = current_user_data.Password


}


async function update_user_data() {
    let Fname = document.getElementById("edit_Fname_field").value
    let Lname = document.getElementById("edit_Lname_field").value
    let email = document.getElementById("edit_email_field").value
    let pass = document.getElementById("edit_pass_field").value

    let lst = {
        "Fname": Fname,
        "Lname": Lname,
        "Email": email,
        "Password": pass,
    }
    console.log(lst)
    update_person(lst,current_user_id);

    document.getElementsByClassName("user_details")[0].style.display = "block"
    document.getElementsByClassName("user_details_edit")[0].style.display = "none"


    change_default_data(lst);



}

 








