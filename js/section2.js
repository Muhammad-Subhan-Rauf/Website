function left_arrow() {
    let cards = document.getElementsByClassName("cards")[0];
    cards = Array.from(cards.children);

    let new_image_order = []
    let new_text_order = []
    for (let i = 0; i < cards.length; i++) {
        let current_image = cards[i].querySelector("img")
        let next_image_index = ((i + 1) % (cards.length));
        let next_image = cards[next_image_index].querySelector("img")


        new_image_order.push(next_image.getAttribute("src"))



        let info = cards[next_image_index].getElementsByClassName("info")[0]
        let info_heading = info.getElementsByClassName("info_heading")[0]
        let info_text = info.getElementsByClassName("info_text")[0]

        new_text_order.push([info_heading.innerHTML,info_text.innerHTML])

    }
    
    for (let i = 0; i < cards.length; i++) {
        swap_text(cards[i], new_text_order[i])


        let current_image = cards[i].querySelector("img")
        current_image.setAttribute("src", new_image_order[i])

        
        
    }

}


function right_arrow() {
    let cards = document.getElementsByClassName("cards")[0];
    cards = Array.from(cards.children);

    let new_image_order = [];
    let new_text_order = [];
    for (let i = 0; i < cards.length; i++) {
        let current_image = cards[i].querySelector("img");
        let prev_image_index = (i - 1 + cards.length) % cards.length; // Move to the left index
        let prev_image = cards[prev_image_index].querySelector("img");

        new_image_order.push(prev_image.getAttribute("src"));

        let info = cards[prev_image_index].getElementsByClassName("info")[0];
        let info_heading = info.getElementsByClassName("info_heading")[0];
        let info_text = info.getElementsByClassName("info_text")[0];

        new_text_order.push([info_heading.innerHTML, info_text.innerHTML]);
    }

    for (let i = 0; i < cards.length; i++) {
        swap_text(cards[i], new_text_order[i]);

        let current_image = cards[i].querySelector("img");
        current_image.setAttribute("src", new_image_order[i]);
    }
}



function swap_text(card1, new_text) {   

    let info = card1.getElementsByClassName("info")[0]
    let info_heading = info.getElementsByClassName("info_heading")[0]

    let info_text = info.getElementsByClassName("info_text")[0]



    info_heading.innerHTML = new_text[0]
    info_text.innerHTML = new_text[1]
}