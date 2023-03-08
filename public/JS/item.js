let stars = document.querySelector(`#stars`);
let numer_stars = document.querySelector(`#numer_stars`);

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



