<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Dish;

class OrderController extends Controller
{
    private $order;
    private $dish;
    private $cartProducts;

    public function __construct( Order $order, Dish $dish )
    {
        $this->order = $order;
        $this->dish = $dish;
        $this->initCartProds();
    }

    public function showForm(){

        $cartProductsTest = $this->getCartProds( );

        return view('orderForm', ['description' => 'Food delivery service', 'order_title' => 'Order', 'cart_products' => $cartProductsTest ]);
    }

    private function getCartProds(){
        return $this->cartProducts;
    }

    public function initCartProds() {
        $productIds = array_column( $this->getCookiesCartProducts(), 'productId');

        $cartProductsInfo = $this->dish->geByIds( $productIds );

        foreach ( $cartProductsInfo as $key => $item ){
            $cartProductsInfo[$key]->count = $this->getProductCartCountByID( $item->id );
        }

        $this->cartProducts = $cartProductsInfo;
    }

    public function getProductCartCountByID( int $id ): int
    {
        $cookiesCartProducts = $this->getCookiesCartProducts();

        foreach ( $cookiesCartProducts as $item ){

            if( (int) $item->productId === (int) $id ){
                return $item->count;
            }
        }

        return 0;
    }

    public function getCookiesCartProducts(){
        return json_decode($_COOKIE['cartProducts']);
    }

    public function create( Request $request ){

        /*$this->order->getQB()->insert(
            ['name' => 'john@example.com', 'phone' => 0, 'dishes' => '']
        );*/

        //var_dump( $request->input('order') );
        $this->order->add( $request->input('order') );

    }
}
