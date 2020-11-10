@extends('main')

@section('content')

    <div class="container">
        <div class="order-form-page">
            <form action="/create-order" method="post" class="order-form" data-csrf-token="{{ csrf_token() }}">
                <div class="order-form__item">
                    <label class="order-form__item-label" for="name">name</label>
                    <input class="order-form__item-input" type="text" id="name" name="name">
                </div>
                <div class="order-form__item">
                    <label class="order-form__item-label" for="address">address</label>
                    <input class="order-form__item-input" type="text" id="address" name="address">
                </div>
                <div class="order-form__item">
                    <label class="order-form__item-label" for="phone">phone</label>
                    <input class="order-form__item-input" type="text" id="phone" name="phone">
                </div>
                <input class="order-form__submit" type="submit">
            </form>

            <div class="order-cart">
                <h2 class="order-cart__title">Selected dishes</h2>

                <div class="order-cart__prods-list">
                    @foreach ($cart_products as $prod)
                        <div class="order-cart__prod-item" data-id="{{ $prod->id }}">
                            <span class="order-cart__prod-item-name">Name: {{ $prod->name }}</span>
                            <span class="order-cart__prod-item-count">Count: <input type="text" class="order-cart__prod-item-count-value" value="{{ $prod->count }}"> </span>
                            <span class="order-cart__prod-item-price">Price ${{ $prod->price }}</span>
                            <button class="order-cart__prod-item-remove">remove</button>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
    
@endsection