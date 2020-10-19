<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Order extends Model
{
    public function getQB(): Builder
    {
        return self::query();

    }

    public function add( array $order_data ){
        $this->getQB()->insert([
            ['name' => $order_data['name'], 'address' => $order_data['address'], 'phone' => $order_data['phone'], 'order_dishes' => serialize($order_data['orderList'])]
        ]);
    }
}
