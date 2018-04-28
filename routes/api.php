<?php

use Illuminate\Http\Request;
use App\Note;
use App\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api'], function() {
	Route::get('/notes', function() {
    	return Note::all();
	});
	Route::get('/notes/{id}', function($id) {
		return Note::find($id);
	});

	Route::get('/users', function() {
		return User::all();
	});

	Route::get('/users/{name}', function($name) {
		try {
			$notes = User::where('name', $name)->firstOrFail()->notes;
			$user = User::where('name', $name)->first();

			if (is_null($user)) {
    			return;
			} else {
				return $notes;
			}
		} catch(\Exception $e) {
			$new_user = new User;
			$new_user->name = $name;
			$new_user->save();
			return $new_user;
		}

	});

	Route::post('/notes/create/{name}', function(Request $request, $name) {
		try {
			$note = new Note;
			$user = User::where('name', $name)->firstOrFail()->id;
			$note->user_id = $user;
			$note->fill($request->all());
			$note->text = substr( nl2br(htmlspecialchars(addslashes(trim($note->text)))) ,0,1000); 
	    	$note->save();

	    	return $note;

		} catch (\Exception $e) {
			echo $e->getMessage();
		}
	});

	Route::delete('/notes/{id}/destroy', function($id) {
		return Note::find($id)->remove();
	});
});

