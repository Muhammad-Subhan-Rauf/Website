let reviews = [
    '"As the minuteness of the parts formed a great hindrance to my speed, I resolved, contrary to my first intention, to make the being of a gigantic stature; that is to say, about eight feet in height, and proportionably large. After having formed this determination, and having spent some months in successfully collecting and arranging."',
    '"Given the intricate details involved, my progress was significantly slowed. I decided, contrary to my initial plan, to create a figure of monumental size—approximately eight feet tall and proportionately massive. After reaching this decision, I dedicated several months to meticulously gathering and organizing the necessary components."',
    '"The complexity of the components greatly impeded my efficiency, leading me to revise my original concept. I opted to construct a being of impressive scale—around eight feet in height and accordingly broad. Following this choice, I invested several months in carefully assembling and preparing the various elements."',
    '"The detailed nature of the parts slowed my progress considerably. Therefore, I altered my initial plan and chose to design a figure of grand proportions—about eight feet tall and appropriately robust. After making this decision, I spent several months successfully gathering and arranging all the necessary materials."'
]
let reviewers = [
    "Núria Moura",
    "Sophia Bennett",
    "Ethan Reed",
    "James Montgomery"
]

let images = [
    'images/pic8.png',
    'images/section8_2.jpeg',
    'images/section8_3.jpeg',
    'images/section8_4.jpeg'
]
let index = 0

let flip_flag = false

function right_arrow_8() {


    let review_box = document.getElementsByClassName("review")[0]
    let image_box = document.getElementsByClassName("image")[2]
    let image = image_box.querySelector("img")


    let text_box = review_box.querySelector(".inner .text")

    let review = text_box.getElementsByClassName("rev")[0]
    let person = text_box.getElementsByClassName("person")[0]
    let source = text_box.getElementsByClassName("source")[0]

    index = (index + 1) % reviews.length;

    review.innerHTML = reviews[index]
    person.innerHTML = reviewers[index]
    source.innerHTML = "Google"

    image.setAttribute("src", images[index])

    var screenWidth = window.screen.width;

    if (!flip_flag) {
        if (screenWidth >= 768) {
            review_box.style.transform = "translate(-90%)"
            image_box.style.transform = "translate(70%)"
            flip_flag = true;
        }

        image.style.objectFit = "cover";
        image.style.objectPosition = "100% 50%"
    }
    else {
        if (screenWidth >= 768) {
            review_box.style.transform = "translate(0%)"
            image_box.style.transform = "translate(0%)"
            flip_flag = false;
        }

        image.style.objectFit = "cover";
        image.style.objectPosition = "0% 0%"

    }


}


function left_arrow_8(){
    

    let review_box = document.getElementsByClassName("review")[0]
    let image_box = document.getElementsByClassName("image")[2]
    let image = image_box.querySelector("img")


    let text_box = review_box.querySelector(".inner .text")

    let review = text_box.getElementsByClassName("rev")[0]
    let person = text_box.getElementsByClassName("person")[0]
    let source = text_box.getElementsByClassName("source")[0]

    index = ((index - 1) + reviews.length) % reviews.length;

    review.innerHTML = reviews[index]
    person.innerHTML = reviewers[index]
    source.innerHTML = "Google"

    image.setAttribute("src", images[index])

    var screenWidth = window.screen.width;

    if (!flip_flag) {
        if (screenWidth >= 768) {
            review_box.style.transform = "translate(-90%)"
            image_box.style.transform = "translate(70%)"
            flip_flag = true;
        }

        image.style.objectFit = "cover";
        image.style.objectPosition = "100% 50%"
    }
    else {
        if (screenWidth >= 768) {
            review_box.style.transform = "translate(0%)"
            image_box.style.transform = "translate(0%)"
            flip_flag = false;
        }

        image.style.objectFit = "cover";
        image.style.objectPosition = "0% 0%"

    }

}