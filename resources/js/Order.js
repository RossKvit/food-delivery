import {Cart} from './Cart';

class Order {

    constructor(){
        this.form = document.querySelector('.order-form') ?  document.querySelector('.order-form'): false;

        if(this.form !== false ){
            this.cart = (new Cart());
            console.log(this.cart);
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

                self.httpRequest( '/create-order', null, JSON.stringify( {order: params} ) );
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

}


export {Order};