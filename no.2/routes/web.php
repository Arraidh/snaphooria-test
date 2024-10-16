<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use Illuminate\Support\Facades\DB;

Route::get('/test-db', function () {
    try {
        DB::connection()->getPdo();
        return "Database connection successful!";
    } catch (\Exception $e) {
        return "Database connection failed: " . $e->getMessage();
    }
});
