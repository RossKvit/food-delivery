<?php


namespace App\Http\Controllers\Rest;

use App\Http\Controllers\Controller;
use App\Dish;
use Illuminate\Http\Request;

class DishController extends Controller
{
    public function store($dishId)
    {

    }

    public function index($dishId)
    {

    }

    public function create($dishId)
    {

    }

    public function show($dishId)
    {
        return Dish::find($dishId);
    }

    public function update($dishId, $restaurantId)
    {

    }

    public function destroy($dishId, $restaurantId)
    {

    }

    public function edit($dishId, $restaurantId)
    {

    }
}