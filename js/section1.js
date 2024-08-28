function play_button() {
    window.open(
        "https://www.youtube.com/watch?v=JLhbTGzE6MA", "_blank");
}

function contact_button() {
    let contact = document.getElementsByClassName("contact")
    contact[0].scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {

        for (const child of contact[0].children) {
            child.style.color = "#90C1C4";
        }


        setTimeout(() => {
            for (const child of contact[0].children) {
                child.style.color = "white";
            }
        }, 3000)
    }, 2000)
}