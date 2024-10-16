<?php

namespace App\Http\Controllers;

use App\Models\Buku;
use Illuminate\Http\Request;

class BukuController extends Controller
{
    public function store(Request $request)
    {
        // Validate the request data
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'penulis' => 'required|string|max:255',
            'tahun_terbit' => 'required|integer',
        ]);

        // Create a new Buku record
        $buku = Buku::create([
            'judul' => $validated['judul'],
            'penulis' => $validated['penulis'],
            'tahun_terbit' => $validated['tahun_terbit'],
        ]);

        // Return a response
        return response()->json([
            'message' => 'Buku berhasil ditambahkan!',
            'data' => $buku
        ], 201);
    }

    public function get()
    {
        // Retrieve all books from the database
        $buku = Buku::all();

        // Return the data in JSON format
        return response()->json($buku);
    }
}
