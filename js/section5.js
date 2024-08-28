
function left_arrow_5() {
    let index = 0


    let cards = document.getElementsByClassName("cards")[1]
    let card_array = cards.getElementsByClassName("card")
    let images_array = get_images(card_array);
    let temp_storage = []

    for (let i = 0; i < card_array.length; i++) {

        temp_storage.push(get_data(images_array[i]))
    }


    for (let i = 0; i < card_array.length; i++) {
        let next_index = get_prev_index(index, card_array.length)

        let data = temp_storage[next_index]

        swap_info(card_array[index], data)


        let text_box = card_array[index].querySelector(".names .text")
        if (text_box) {
            text_box.setAttribute("title", data[1])

            let name = text_box.querySelector(".heading")
            let job = text_box.querySelector(".desc")

            name.innerHTML = data[0]
            job.innerHTML = data[1]
        }
        index = next_index
    }



}

function right_arrow_5() {
    let index = 0


    let cards = document.getElementsByClassName("cards")[1]
    let card_array = cards.getElementsByClassName("card")
    let images_array = get_images(card_array);
    let temp_storage = []

    for (let i = 0; i < card_array.length; i++) {

        temp_storage.push(get_data(images_array[i]))
    }


    for (let i = 0; i < card_array.length; i++) {
        let next_index = get_next_index(index, card_array.length)

        let data = temp_storage[next_index]

        swap_info(card_array[index], data)


        let text_box = card_array[index].querySelector(".names .text")
        if (text_box) {
            text_box.setAttribute("title", data[1])

            let name = text_box.querySelector(".heading")
            let job = text_box.querySelector(".desc")

            name.innerHTML = data[0]
            job.innerHTML = data[1]
        }
        index = next_index
    }



}


function get_next_index(index, array_length) {
    return ((index + 1) % array_length)
}
function get_prev_index(index, array_length) {
    return (index - 1 + array_length) % array_length
}

function get_data(card_img) {
    let name = card_img.dataset.name
    let job = card_img.dataset.job
    let src = card_img.getAttribute("src")
    let alt = card_img.getAttribute("alt")
    return [name, job, src, alt];

}

function get_images(array) {
    let lst = []
    for (let i = 0; i < array.length; i++) {
        let image = array[i].querySelector("img")
        lst.push(image)
    }
    return lst
}

function swap_info(card, info) {
    let image = card.querySelector("img")
    image.dataset.name = info[0]
    image.dataset.job = info[1]
    image.setAttribute("src", info[2])
    image.setAttribute("alt", info[3])
}
