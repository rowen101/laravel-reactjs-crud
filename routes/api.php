<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/addemployees','EmployeeController@create');
Route::get('/employeelist','EmployeeController@employeelist');
Route::get('/showemployee/{id}','EmployeeController@showemployeeid');
Route::put('/update-employee/{id}','EmployeeController@updateemployeeid');
Route::delete('/delete-employee/{id}','EmployeeController@deleteemployee');

