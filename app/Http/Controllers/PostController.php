<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function all_post(){
       $posts = Post::with('user','category')->orderBy('id','desc')->get();
       return response()->json([
           'posts'=>$posts
       ],200);
    }
    public function save_post(Request $request){


        $post = new Post();
        $post->title = $request->title;
        $post->description = $request->description;
        $post->cat_id = $request->cat_id;
        $post->user_id = Auth::user()->id;
        $post->save();
    }
}
