@extends('main')

@section('content')
<div class="restaurants-page">
    <div class="restaurants-page__list">
        @foreach ($restaurants_list as $restaurant)
            <div class="restaurants-page__item">
                <a class="restaurants-page__item-name" href="{{ $restaurant->url }}" >{{ $restaurant->name }}</a>
                <span class="restaurants-page__item-rate">{{ $restaurant->rate }}</span>
                <img src="{{ $restaurant->icon }}" alt="{{ $restaurant->name }}">
            </div>
        @endforeach
    </div>
</div>
@endsection
