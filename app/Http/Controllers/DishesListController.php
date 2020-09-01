<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dish;
use App\Restaurant;

class DishesListController extends Controller
{

    private $dish;
    private $restaurant;

    public function __construct( Dish $dish, Restaurant $restaurant )
    {
        $this->dish = $dish;
        $this->restaurant = $restaurant;
    }

    public function show( string $slug )
    {
        $restaurant = $this->restaurant->getQB()->where(['slug' => $slug])->first(); //->toArray();
        $dishesList = $this->dish->getByRestaurant( $restaurant->id );

        return view('dishes', ['dishesList' => $dishesList, 'restaurant' => $restaurant]);
    }
}
