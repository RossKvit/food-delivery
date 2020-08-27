<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styles -->
    <style>

    </style>
</head>
<body>
<div class="restaurants-page">
    <div class="restaurants-page__list">
        @foreach ($restaurants_list as $restaurant)
            <div class="restaurants-page__item">
                <a class="restaurants-page__item-name" href="#" >{{ $restaurant->name }}</a>
                <span class="restaurants-page__item-rate">{{ $restaurant->rate }}</span>
                <img src="{{ $restaurant->icon }}" alt="{{ $restaurant->name }}">
            </div>
        @endforeach
    </div>
</div>
</body>
</html>
