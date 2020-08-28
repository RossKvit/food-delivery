<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dish;

class DishesListController extends Controller
{

    private $dish;

    public function __construct( Dish $dish )
    {
        $this->dish = $dish;
    }

    public function show( $slug ){

        //getByRestaurant

    }
}
