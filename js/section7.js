function blog_click(obj){
    console.log(obj)
}


function left_arrow_7(){
    let index = 0

    let cards = document.getElementsByClassName("cards")[2]
    let card_array = cards.getElementsByClassName("card")
    
    let data_array = []

    for (let i of card_array){
        

        data_array.push(get_data_7(i))

    }
    

    for (let i of card_array){
        let next_index = get_next_index(index,card_array.length)
        
        change_data(i, data_array[next_index])


        index = next_index

    }
}
function right_arrow_7(){
    let index = 0

    let cards = document.getElementsByClassName("cards")[2]
    let card_array = cards.getElementsByClassName("card")
    
    let data_array = []

    for (let i of card_array){
        

        data_array.push(get_data_7(i))

    }
    

    for (let i = 0; i< card_array.length; i++){
        let next_index = get_prev_index(i,card_array.length)
        
        
        change_data(card_array[i], data_array[next_index])


        index = next_index

    }
}



function get_next_index_7(index, array_length) {
    return ((index + 1) % array_length)
}


function get_prev_index_7(index, array_length) {
    return Math.abs((index - 1) % array_length)
}


function get_data_7(card){
    let top_text = card.getElementsByClassName("top_text")[0]
    let top_heading = top_text.getElementsByClassName("heading")[0].innerHTML
    let top_subheading = top_text.getElementsByClassName("subheading")[0].innerHTML


    let bottom_text = card.getElementsByClassName("bottom_text")[0]
    let bottom_heading = bottom_text.getElementsByClassName("heading")[0].innerHTML
    let bottom_subheading = bottom_text.getElementsByClassName("subheading")[0].innerHTML


    return [top_heading,top_subheading, bottom_heading, bottom_subheading]

}


function change_data(card,info){
    let top_text = card.getElementsByClassName("top_text")[0]
    let top_heading = top_text.getElementsByClassName("heading")[0]
    let top_subheading = top_text.getElementsByClassName("subheading")[0]


    let bottom_text = card.getElementsByClassName("bottom_text")[0]
    let bottom_heading = bottom_text.getElementsByClassName("heading")[0]
    let bottom_subheading = bottom_text.getElementsByClassName("subheading")[0]


    top_heading.innerHTML = info[0]
    top_subheading.innerHTML = info[1]
    bottom_heading.innerHTML = info[2]
    bottom_subheading.innerHTML = info[3]




}