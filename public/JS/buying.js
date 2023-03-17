let paying = document.querySelector(`.paying`);
let button_pay = document.querySelector(`.button_pay`);

button_pay.addEventListener(`click`, function(){
    paying.classList.toggle(`d-none`)
})
