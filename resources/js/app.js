import {Cart} from './Cart';
import {Style} from './Style';
import {Order} from './Order';

/*
class App{
    constructor(){
    }
}
console.log(Cart);
let app;
*/

document.addEventListener('DOMContentLoaded', function(){
    //app = new App();
    (new Style());
    let activeCart = new Cart();
    (new Order( activeCart ));
});
