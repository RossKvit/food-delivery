class Cart {

    constructor(){
        this.dataCartKey = 'cartProducts';
        this.cartDishes = this.getDishesList();
        this.initEventListeners();
        this.showHideCartPopup();
    }

    initEventListeners() {
        let self = this;

        document.querySelectorAll('.dishes-page__item-order').forEach( function (el) {
            el.addEventListener( 'click', function(e){
                let dishId = e.target.getAttribute('data-dish-id'),
                    dishPrice = e.target.getAttribute('data-dish-price');

                self.addProductToCart( dishId, dishPrice );
            } );
        } );
    }

    addProductToCart( id, dishPrice ) {
        let currentProductPos = null;
        this.cartDishes.map( (item, key) => { if( item.productId === id ){ currentProductPos = key; } } );

        if( currentProductPos !== null ){
            this.cartDishes[currentProductPos] = ( {count: this.cartDishes[currentProductPos].count+1, productId: id, dishPrice: dishPrice} );
        }else{
            this.cartDishes.push( {count: 1, productId: id, dishPrice: dishPrice} );
        }

        this.updateDishesList();
    }

    getCartTotal(){
        let totalPrice = 0;
        this.cartDishes.forEach( function (dish) {
            totalPrice += dish.count * dish.dishPrice;
        } );

        return totalPrice;
    }

    getCartProductCount(){
        let productCount = 0;
        this.cartDishes.forEach( function (dish) {
            productCount += dish.count;
        } );

        return productCount;
    }

    showHideCartPopup(){

        if( this.cartDishes.length > 0 ){
            let cartHtml = document.querySelector('.cart-popup');
            if( cartHtml ){
                cartHtml.classList.toggle( 'cart-popup_visible' );
                console.log(this.cartDishes);
                cartHtml.querySelector('.cart-popup__counter-value').innerHTML = this.getCartProductCount()+ ' ($' + this.getCartTotal() + ')';
            }
        }
    }

    updateDishesList(){
        document.cookie = this.dataCartKey +"="+ JSON.stringify( this.cartDishes ) +"; expires= 01 Jan 2025 00:00:00 UTC; path=/;";

        this.showHideCartPopup();
    }

    getDishesList(){
        let cookieList = document.cookie.split(";"),
            self = this;

        cookieList.forEach( function ( cookieItem, key ) {
            cookieItem = cookieItem.split("=");

            let cookieItemObj = {};
            cookieItemObj[ cookieItem[0].trim() ] = cookieItem[1];
            cookieList[key] = cookieItemObj;
        } );

        let dishesList = cookieList.filter(function (item) {
            if( typeof item[self.dataCartKey] !== 'undefined' ){
                return item[self.dataCartKey];
            }
        });

        if( typeof dishesList[0] !== 'undefined' && dishesList[0][self.dataCartKey] ){
            return JSON.parse( dishesList[0][self.dataCartKey] );
        }else{
            return [];
        }
    }
}

export {Cart};