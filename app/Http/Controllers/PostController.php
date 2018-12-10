<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function all_post(){
       $posts = Post::with('user','category')->get();
       return response()->json([
           'posts'=>$posts
       ],200);

    }
}
