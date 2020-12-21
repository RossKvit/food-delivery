import {Cart} from './Cart';

class Order {

    constructor(){
        this.form = document.querySelector('.order-form') ?  document.querySelector('.order-form'): false;

        if(this.form !== false ){
            this.cart = (new Cart());
            this.initEventListeners();
        }
    }

    initEventListeners(){
        let self = this;
        if( document.querySelector('.order-form__submit') ){
            document.querySelector('.order-form__submit').addEventListener('click', function (e) {
                e.preventDefault();

                let params = {
                    name: self.form.name.value,
                    address: self.form.address.value,
                    phone: self.form.phone.value,
                    orderList: self.cart.getDishesList()
                };
                console.log({order: params});

                self.httpRequest( '/create-order', function( httpRequest ){
                    if ( httpRequest.status == 200 ) {
                        alert('Order created =)');
                        self.cart.clearDishesList();
                        window.location.replace("/");
                    } else {
                        alert('Sorry. Order failed by unexpected error =(');
                    }
                }, JSON.stringify( {order: params} ) );
            });
        }
    }

    httpRequest( url, callback, params ) {
        let httpRequest = new XMLHttpRequest(),
            csrfToken = document.querySelector('.order-form').getAttribute('data-csrf-token');

        if( !csrfToken ){
            return;
        }

        httpRequest.onreadystatechange = function() {
            if ( httpRequest.readyState == XMLHttpRequest.DONE ) {   // XMLHttpRequest.DONE == 4
                callback( httpRequest );
            }
        };

        httpRequest.open("POST", url, true);
        httpRequest.setRequestHeader("Content-Type", "application/json"); // "application/json"
        httpRequest.setRequestHeader("X-CSRF-TOKEN", csrfToken);

        httpRequest.send( params );
    }

}


export {Order};