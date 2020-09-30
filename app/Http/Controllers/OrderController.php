<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function showForm(  ){
        return view('orderForm', ['description' => 'Food delivery service', 'order_title' => 'Order' ]);
    }

    public function create( Request $request ){
        error_log( print_r($request, true) );
        var_dump( $request );
    }
}
