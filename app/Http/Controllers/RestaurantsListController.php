<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RestaurantsListController extends Controller
{
    public function getRestaurants():array
    {
        $restaurants = DB::table('restaurants')->distinct()->get()->toArray();
        foreach ( $restaurants as $key => $item ){
            $restaurants[$key]->url = '/restaurants/' . $item->slug;
        }
        return $restaurants;
    }

    public function show(){
        return view('restaurants', ['restaurants_list' => $this->getRestaurants() ]);
    }
}
