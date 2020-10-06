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

    public function showForm(  ){
        return view('orderForm', ['description' => 'Food delivery service', 'order_title' => 'Order' ]);
    }

    public function create( Request $request ){

        /*$this->order->getQB()->insert(
            ['name' => 'john@example.com', 'phone' => 0, 'dishes' => '']
        );*/
        //{count: 1, productId: id};

        //error_log( print_r($request, true) );
        var_dump( $request->input('productId') );
        //echo $request;
        echo '111';
    }
}
