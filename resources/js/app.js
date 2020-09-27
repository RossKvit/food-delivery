//require('./bootstrap');
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dishes-page__item-image').forEach( function (elem) {
        elem.addEventListener('click', function(e){
            e.target.parentElement.classList.toggle('dishes-page__item_open-desc');
        });
    } );
});

//dishes-page__item-order
