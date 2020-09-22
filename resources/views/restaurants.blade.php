@extends('main')

@section('content')
<div class="container">
    <div class="restaurants-page">
        <div class="restaurants-page__filters">

        </div>
        <div class="restaurants-page__list">
            @foreach ($restaurants_list as $restaurant)
                <div class="restaurants-page__item">
                    <div class="restaurants-page__item-top">
                        <span class="restaurants-page__item-name">{{ $restaurant->name }}</span>
                        <span class="restaurants-page__item-rate">{{ $restaurant->rate }}</span>
                    </div>
                    <a href="{{ $restaurant->url }}">
                        <img class="restaurants-page__image" src="{{ $restaurant->icon }}" alt="{{ $restaurant->name }}">
                    </a>
                    <div class="restaurants-page__delivery-price"><span>Delivery price:</span> <span>{{ $restaurant->delivery_price }}</span></div>
                    <div class="restaurants-page__work-time"><span>Work time:</span> <span>{{ $restaurant->work_time }}</span></div>
                </div>
            @endforeach
        </div>
    </div>
</div>
@endsection
