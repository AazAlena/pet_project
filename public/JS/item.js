let stars = document.querySelector(`#stars`);
let numer_stars = document.querySelector(`#numer_stars`);
let purchases = []

numer_stars.addEventListener(`input`, function(){
    p = numer_stars.value;
    m = 5 -  numer_stars.value;
    stars.innerHTML = ``;
    for (i=0; i<p; i++){
        stars.innerHTML += `★`
    }
    for (i=0; i<m; i++){
        stars.innerHTML += `☆`
    }
    
})

let sidebar = document.querySelector(`.sidebar`);
let to_card = document.querySelector(`#ad_re_to_card`);
let add_or_remove_item = document.querySelector(`.add_or_remove_item`);
to_card.addEventListener(`click`, function(){
    if (to_card.innerHTML == `ADD TO CART`){
        to_card.innerHTML = `REMOVE FROM CART`;
        sidebar.classList.remove(`hidden`);
        
    } else {
        to_card.innerHTML = `ADD TO CART`;
        sidebar.classList.remove(`hidden`);
       
    }
})


let continue_shopping = document.querySelector(`.continue_shopping`);
continue_shopping.addEventListener(`click`, function(){
    sidebar.classList.add(`hidden`);
})

let continue_shopping_in_card = document.querySelector(`.continue_shopping_in_card`);
continue_shopping_in_card.addEventListener(`click`, function(){
    sidebar.classList.add(`hidden`);
})


