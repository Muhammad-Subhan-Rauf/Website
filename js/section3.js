function left_image_click(){

    let slides = document.getElementsByClassName("slides")[0]
    
    let slide1 = slides.getElementsByClassName("slide")[0]
    let slide1_img = slide1.querySelector("img")
    
    
    
    let slide1_img_src = slide1.querySelector("img").getAttribute("src")
    let slide1_img_alt = slide1.querySelector("img").getAttribute("alt")
    let slide2 = slides.getElementsByClassName("slide")[1]



    let slide2_img = slide2.querySelector("img")

    
    let inner_text = slide2.querySelector(".text")

    let text_heading = inner_text.querySelector(".heading")
    let text_description = inner_text.querySelector(".desc")
    
    text_heading.innerHTML = slide1_img.dataset.heading
    text_description.innerHTML = slide1_img.dataset.text
    
    
    let temp_heading = slide1_img.dataset.heading
    let temp_text = slide1_img.dataset.text

    slide1_img.dataset.heading = slide2_img.dataset.heading
    slide1_img.dataset.text = slide2_img.dataset.text

    slide2_img.dataset.heading = temp_heading
    slide2_img.dataset.text = temp_text
    
    

    let temp_holder_src = slide2_img.getAttribute("src") 
    let temp_holder_alt = slide2_img.getAttribute("alt")

    

    

    
    slide2_img.setAttribute("src",slide1_img_src)
    slide2_img.setAttribute("alt",slide1_img_alt)
    

    
    slide1_img.setAttribute("src",temp_holder_src)
    slide1_img.setAttribute("alt",temp_holder_alt)
    




    
    

}

function right_image_click(){
    let slides = document.getElementsByClassName("slides")[0]
    
    let slide1 = slides.getElementsByClassName("slide")[2]
    let slide1_img = slide1.querySelector("img")
    
    
    
    let slide1_img_src = slide1.querySelector("img").getAttribute("src")
    let slide1_img_alt = slide1.querySelector("img").getAttribute("alt")
    let slide2 = slides.getElementsByClassName("slide")[1]



    let slide2_img = slide2.querySelector("img")

    
    let inner_text = slide2.querySelector(".text")

    let text_heading = inner_text.querySelector(".heading")
    let text_description = inner_text.querySelector(".desc")
    
    text_heading.innerHTML = slide1_img.dataset.heading
    text_description.innerHTML = slide1_img.dataset.text

    
    let temp_heading = slide1_img.dataset.heading
    let temp_text = slide1_img.dataset.text

    slide1_img.dataset.heading = slide2_img.dataset.heading
    slide1_img.dataset.text = slide2_img.dataset.text

    slide2_img.dataset.heading = temp_heading
    slide2_img.dataset.text = temp_text
    
    

    let temp_holder_src = slide2_img.getAttribute("src") 
    let temp_holder_alt = slide2_img.getAttribute("alt")



    
    slide2_img.setAttribute("src",slide1_img_src)
    slide2_img.setAttribute("alt",slide1_img_alt)
    

    slide1_img.setAttribute("src",temp_holder_src)
    slide1_img.setAttribute("alt",temp_holder_alt)
    



}