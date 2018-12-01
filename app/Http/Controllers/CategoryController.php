<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function add_category(Request $request){
        return $request->all();
    }
}
