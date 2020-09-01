@extends('main')

@section('content')
<div class="home-page">
    <div class="home-page__content" style="background-image: url( {{ asset('img/home_dg.jpeg') }} ); ">
        <div class="title home-page-description m-b-md">
            {{ $description }}
        </div>
    </div>
        <a href="/restaurants" class="home-page__order-btn">{{$order_title}}</a>
</div>
@endsection