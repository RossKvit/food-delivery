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
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'Nunito', sans-serif;
            font-weight: 200;
            height: 100vh;
            margin: 0;
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 84px;
        }

        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-bottom: 30px;
        }

        .home-page{
            align-items: center;
            display: flex;
            justify-content: center;
            position: relative;
            height: 100%;
            flex-flow: column;
        }

        .home-page__content{
            background: url( {{ asset('img/home_dg.jpeg') }} );
            position: relative;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .home-page__content:before{
            content: '';
            background: #fff;
            opacity: 0.2;
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            left:0;
            z-index: 0;
        }

        .home-page-description{
            color: #fff;
        }
        .home-page__order-btn{
            margin: 30px 0px 0 0;
        }
    </style>
</head>
<body>
<div class="home-page">
    @if (Route::has('login'))
        <div class="top-right links">
            @auth
            <a href="{{ url('/home') }}">Home</a>
            @else
                <a href="{{ route('login') }}">Login</a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}">Register</a>
                @endif
                @endauth
        </div>
    @endif

    <div class="home-page__content">
        <div class="title home-page-description m-b-md">
            {{ $description }}
        </div>
    </div>
        <a href="/restaurants" class="home-page__order-btn">{{$order_title}}</a>
</div>
</body>
</html>
