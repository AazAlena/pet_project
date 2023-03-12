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
to_card.addEventListener(`click`, function(){
    if (to_card.innerHTML == `ADD TO CART`){
        to_card.innerHTML = `REMOVE FROM CART`;
        sidebar.classList.remove(`hidden`);
        purchases.push(
            {
                item1:item1
            }
        )
    } else {
        to_card.innerHTML = `ADD TO CART`;
        sidebar.classList.remove(`hidden`);
    }
})
console.log(purchases)
let continue_shopping = document.querySelector(`.continue_shopping`);
continue_shopping.addEventListener(`click`, function(){
    sidebar.classList.add(`hidden`);
})

sp_p_in_soplist = document.querySelector(`#sp_p_in_soplist`); 
btn_opem_close = document.querySelector(`.btn_opem_close`);
btn_opem_close.addEventListener(`click`, function(){
    sp_p_in_soplist.classList.toggle(`d-none`);
})

