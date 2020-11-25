@extends('main')

@section('content')

    <div class="container">
        <div class="order-form-page">
            <h1 class="order-form-page__title">Order details</h1>
            <form action="/create-order" method="post" class="order-form" data-csrf-token="{{ csrf_token() }}">
                <div class="order-form__item">
                    <label class="order-form__item-label" for="name">Name</label>
                    <input class="order-form__item-input" type="text" id="name" placeholder="Pavel" name="name">
                </div>
                <div class="order-form__item">
                    <label class="order-form__item-label" for="address">Address</label>
                    <input class="order-form__item-input" type="text" placeholder="Central street, 8" id="address" name="address">
                </div>
                <div class="order-form__item">
                    <label class="order-form__item-label" for="phone">Phone</label>
                    <input class="order-form__item-input" type="text" id="phone" placeholder="088 566 45 45" name="phone">
                </div>
                <input class="order-form__submit" type="submit">
            </form>

            <div class="order-cart">
                <h2 class="order-cart__title">Selected dishes</h2>

                <div class="order-cart__prods-list">
                    @foreach ($cart_products as $prod)
                        <div class="order-cart__prod-item" data-id="{{ $prod->id }}" data-price="{{ $prod->price }}" >
                            <span class="order-cart__prod-item-name">{{ $prod->name }}</span>
                            <span class="order-cart__prod-item-count">Count: <input type="text" class="order-cart__prod-item-count-value" value="{{ $prod->count }}"> </span>
                            <span class="order-cart__prod-item-price">Price: ${{ $prod->price }}</span>
                            <button class="order-cart__prod-item-remove">remove</button>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
    
@endsection