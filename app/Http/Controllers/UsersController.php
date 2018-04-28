<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;

class UsersController extends Controller
{
	public function index() {
		return view('index');
	}
}
