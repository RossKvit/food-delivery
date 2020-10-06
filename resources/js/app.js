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
        this.cartDishes = this.getDishesList();
        this.initEventListeners();
    }

    initEventListeners() {
        let self = this;

        document.querySelectorAll('.dishes-page__item-order').forEach( function (el) {
            el.addEventListener( 'click', function(e){
                let dishId = e.target.getAttribute('data-dish-id');
                self.addProductToCart( dishId );
            } );
        } );
    }

    addProductToCart( id ) {
        let currentProductPos = null;
        this.cartDishes.map( (item, key) => { if( item.productId === id ){ currentProductPos = key; } } );

        if( currentProductPos !== null ){
            this.cartDishes[currentProductPos] = ( {count: this.cartDishes[currentProductPos].count+1, productId: id} );
        }else{
            this.cartDishes.push( {count: 1, productId: id} );
        }

        this.updateDishesList();
        //this.httpRequest( '/create-order', null, JSON.stringify( params ) );
    }

    showCartPopup(){
        if( document.querySelector('.') ){

        }
    }

    httpRequest( url, callback, params ) {
        let httpRequest = new XMLHttpRequest(),
            csrfToken = document.querySelector('.dishes-page__list').getAttribute('data-csrf-token');

        if( !csrfToken ){
            return;
        }

        httpRequest.onreadystatechange = function() {
            if ( httpRequest.readyState == XMLHttpRequest.DONE ) {   // XMLHttpRequest.DONE == 4
                if ( httpRequest.status == 200 ) {
                    console.log( httpRequest.responseText );
                }
                else if ( httpRequest.status == 400 ) {
                    alert('There was an error 400');
                }
                else {
                    alert('something else other than 200 was returned');
                }
            }
        };

        httpRequest.open("POST", url, true);
        httpRequest.setRequestHeader("Content-Type", "application/json"); // "application/json"
        httpRequest.setRequestHeader("X-CSRF-TOKEN", csrfToken);

        httpRequest.send( params );
    }

    updateDishesList(){
        document.cookie = this.dataCartKey +"="+ JSON.stringify( this.cartDishes ) +"; expires= 01 Jan 2025 00:00:00 UTC; path=/;";
    }

    getDishesList(){
        if( document.cookie[this.dataCartKey] ){
            return JSON.parse( document.cookie[this.dataCartKey] );
        }else{
            return [];
        }
    }
}

document.addEventListener('DOMContentLoaded', function(){
    (new Order()); //.constructor();
});