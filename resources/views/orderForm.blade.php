@extends('main')

@section('content')

    <div class="container">
        <div class="order-form-page">
            <form action="/create-order" method="post" class="order-form">
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
                <input type="submit">
            </form>
        </div>        
    </div>
    
@endsection