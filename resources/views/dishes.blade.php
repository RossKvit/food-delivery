@extends('main')

@section('content')
<div class="dishes-page">
    <div class="container">
        <div class="restaurant-info">
            <div class="restaurant-info__rate"><span>Rate:</span> <span>{{ $restaurant->rate }}</span></div>
            {{--<img class="restaurant-info__image" src="{{ $restaurant->icon }}" alt="{{ $restaurant->name }}">--}}
            <div class="restaurant-info__work-time"><span>Work time:</span> <span>{{ $restaurant->work_time }}</span></div>
            <div class="restaurant-info__delivery"><span>Delivery price:</span> <span>${{ $restaurant->delivery_price }}</span></div>
        </div>
        <div class="dishes-page__list" >
            @foreach ($dishesList as $dish)
                <div class="dishes-page__item">
                    {{--<img class="dishes-page__item-image" src="{{ $dish->image }}" alt="{{ $dish->name }}">--}}

                    <div class="dishes-page__item-info">
                        <span class="dishes-page__item-name" >{{ $dish->name }}</span>
                        <span class="dishes-page__item-desc">{{ $dish->description }}</span>
                        <p class="dishes-page__item-details">
                            <span class="dishes-page__item-weight">{{ $dish->weight}}gm.</span>
                            <span class="dishes-page__item-price">${{ $dish->price}}</span>
                            <button data-dish-id="{{$dish->id}}" data-dish-price="{{ $dish->price }}" class="dishes-page__item-order">add</button>
                        </p>
                    </div>
                </div>
            @endforeach
        </div>

        @include('cartPopup', ['order_link' => '/order'] )
    </div>

</div>
@endsection