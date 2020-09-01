@extends('main')

@section('content')
<div class="dishes-page">
    <div class="container">
        <div class="restaurant-info">
            <div>{{ $restaurant->rate }}</div>
            <img src="{{ $restaurant->icon }}" alt="{{ $restaurant->name }}">
            <div>{{ $restaurant->work_time }}</div>
            <div>{{ $restaurant->delivery_price }}</div>
        </div>
        <div class="dishes-page__list">
            @foreach ($dishesList as $dish)
                <div class="dishes-page__item">
                    <img class="dishes-page__item-image" src="{{ $dish->image }}" alt="{{ $dish->name }}">
                    <span class="dishes-page__item-name" >{{ $dish->name }}</span>
                    <span class="dishes-page__item-desc">{{ $dish->description }}</span>
                    <p class="dishes-page__item-details">
                        <span class="dishes-page__item-weight">{{ $dish->weight}}</span>
                        <span class="dishes-page__item-price">{{ $dish->price}}</span>
                    </p>
                </div>
            @endforeach
        </div>
    </div>
</div>
@endsection