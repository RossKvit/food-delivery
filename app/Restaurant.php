<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Restaurant extends Model
{
    public function getQB(): Builder
    {
        return self::query();
    }
}
