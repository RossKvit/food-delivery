<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;

class OrderController extends Controller
{
    private $order;

    public function __construct( Order $order )
    {
        $this->order = $order;
    }

    public function showForm(){

        $cartProducts = json_decode($_COOKIE['cartProducts']);
        return view('orderForm', ['description' => 'Food delivery service', 'order_title' => 'Order', 'cart_products' => $cartProducts ]);
    }

    public function create( Request $request ){

        /*$this->order->getQB()->insert(
            ['name' => 'john@example.com', 'phone' => 0, 'dishes' => '']
        );*/

        var_dump( $request->input('order') );
        $this->order->add( $request->input('order') );

    }
}
