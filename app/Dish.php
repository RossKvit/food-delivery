<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;



class Dish extends Model
{
    public function getByRestaurant( int $restaurantId ){

        return $this->getQB()->where(['restaurant_id' => $restaurantId])->get();
    }

    public function getQB(): Builder
    {
        return self::query();
    }
}
