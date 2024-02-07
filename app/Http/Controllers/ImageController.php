<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ImageController extends Controller
{
    public function show($filename)
    {
        {
            $url = 'http://10.1.1.108/PMS_Docs/Profile%20pic/' . $filename;
            $response = Http::get($url);

            if ($response->successful()) {
                return response($response->body())
                    ->header('Content-Type', 'image/jpg');
            }

//            abort(404); // Image not found
        }
    }
}
