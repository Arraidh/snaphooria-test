<?php
use App\Http\Controllers\BukuController;

Route::post('/buku', [BukuController::class, 'store']);
Route::get('/buku', [BukuController::class, 'get']);