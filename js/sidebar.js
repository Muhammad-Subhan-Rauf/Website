let blur_flag = false

function applyBlur(flag = false) {

    if (flag){
        blur_flag = flag
    }
    

    if (!blur_flag) {
        add_sidebar();
        document.body.classList.add("blur_body", "blurred");
        blur_flag = true

        add_listener();
    }
    else {
        hide_sidebar()
        remove_listener();
        document.body.classList.remove("blur_body")
        document.body.classList.add("blur_body", "removed_blur")

        setTimeout(() => {
            document.body.removeAttribute("class");
        }, 1000)

        blur_flag = false

    }



}


function add_sidebar(){
    
    document.querySelector(".sidebar").classList.add("responsive")

}

function hide_sidebar(){
    
    
    document.querySelector(".sidebar").classList.remove("responsive")
    
    // document.querySelector(".sidebar").classList.add("hidden")


}




function add_listener(){
    document.addEventListener('click', click_event);
}

function remove_listener(){
    document.removeEventListener('click', click_event);
}


function click_event(event) {
    const sidebar = document.querySelector('.sidebar');
    let navbar = document.querySelector('.navbar');
    const navbar_login = document.querySelector('.navbar_other');
    
    navbar = (!navbar) ? navbar_login: navbar;

    if (!sidebar.contains(event.target) && !navbar.contains(event.target)) {
        applyBlur(true);
    }
}

