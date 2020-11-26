class Cart {

    constructor(){
        this.dataCartKey = 'cartProducts';
        this.cartDishes = this.getDishesList();
        this.initEventListeners();
        this.showHideCartPopup();
        this.initRemoveProdButtons();
        this.initChangeCountInputs();
    }

    initEventListeners() {
        let self = this;

        document.querySelectorAll('.dishes-page__item-order').forEach( function (el) {
            el.addEventListener( 'click', function(e){
                let dishId = e.target.getAttribute('data-dish-id'),
                    dishPrice = e.target.getAttribute('data-dish-price');

                self.addCartProduct( dishId, dishPrice );
            } );
        } );
    }

    addCartProduct( id, dishPrice ) {
        let currentProductPos = null;
        if( this.cartDishes.length > 0 ){
            this.cartDishes.map( (item, key) => { if( item.productId === id ){ currentProductPos = key; } } );
        }

        if( currentProductPos !== null ){
            this.cartDishes[currentProductPos] = ( {count: this.cartDishes[currentProductPos].count+1, productId: id, dishPrice: dishPrice} );
        }else{
            this.cartDishes.push( {count: 1, productId: id, dishPrice: dishPrice} );
        }

        this.updateDishesList();
    }

    setCartProductCount(id, count){
        let currentProductPos = null;
        if( this.cartDishes.length > 0 ){
            this.cartDishes.map( (item, key) => { if( item.productId === id ){ currentProductPos = key; } } );
        }

        if( currentProductPos !== null ){
            this.cartDishes[currentProductPos].count = count;
        }else{
            return false;
        }

        this.updateDishesList();
        return true;
    }

    removeProductFromCart( id ) {
        let currentProductPos = null;
        this.cartDishes.map( (item, key) => { if( item.productId === id ){ currentProductPos = key; } } );

        if( currentProductPos !== null ){
            this.cartDishes.splice(currentProductPos, 1);
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
        console.log( this.cartDishes );
        if( this.cartDishes.length > 0 ){
            this.cartDishes.forEach( function (dish) {
                productCount += dish.count;
            } );
        }

        return productCount;
    }

    showHideCartPopup(){
        let cartHtml = document.querySelector('.cart-popup');
        if( cartHtml ){
            console.log(!cartHtml.classList.contains('cart-popup_visible'));
            if( this.cartDishes.length > 0 && !cartHtml.classList.contains('cart-popup_visible') ){
                    cartHtml.classList.add( 'cart-popup_visible' );
            }else if( this.cartDishes.length === 0 ){
                cartHtml.classList.remove( 'cart-popup_visible' );
            }
            cartHtml.querySelector('.cart-popup__counter-value').innerHTML = this.getCartProductCount()+ ' ($' + this.getCartTotal() + ')';
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

    initRemoveProdButtons(){
        let self = this;

        if( document.querySelector('.order-cart__prod-item-remove') ){
            document.querySelectorAll('.order-cart__prod-item-remove').forEach( function (el) {
                el.addEventListener( 'click', function(e){
                    var prodId = e.target.closest('.order-cart__prod-item').getAttribute('data-id');
                    self.removeProductFromCart( prodId );
                });
            });
        }
    }

    initChangeCountInputs(){
        let self = this;

        if( document.querySelector('.order-cart__prod-item-count-value') ){
            document.querySelectorAll('.order-cart__prod-item-count-value').forEach( function (el) {
                el.addEventListener( 'change', function(e){
                    var prodId = e.target.closest('.order-cart__prod-item').getAttribute('data-id')


                    if( prodId ){
                        self.setCartProductCount( prodId, e.target.value );
                    }else{
                        alert('Item not founded');
                    }
                });
            });
        }
    }
}

export {Cart};