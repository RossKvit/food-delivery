<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RestaurantsListController extends Controller
{
    public function getRestaurants():array
    {
        return DB::table('restaurants')->distinct()->get()->toArray();
    }

    public function show(){
        return view('restaurants', ['restaurants_list' => $this->getRestaurants() ]);
    }
}
