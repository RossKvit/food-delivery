//require('./bootstrap');
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dishes-page__item-image').forEach( function (elem) {
        elem.addEventListener('click', function(e){
            e.target.parentElement.classList.toggle('dishes-page__item_open-desc');
        });
    } );
});

class Order {

    constructor(){
        this.dataCartKey = 'cartProducts';
        this.initEventListeners();
    }

    initEventListeners() {
        let self = this;

        document.querySelectorAll('.dishes-page__item-order').forEach( function (el) {
            console.log('45454545');
            el.addEventListener( 'click', function(e){
                console.log('00000');

                let dishId = e.target.getAttribute('data-dish-id');
                self.addProductToCart( dishId );
            } );
        } );
    }

    addProductToCart( id ) {
        console.log( this.getCookie( this.dataCartKey ) );

        this.setCookies( this.dataCartKey, id );
    }

    setCookies( dataKey, dataValue ){
        document.cookie = dataKey +"="+ dataValue +"; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    getCookie( dataKey ){
        return document.cookie[dataKey];
    }
}

(new Order());
