<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/',[\App\Http\Controllers\DraftController::class, 'index'])->name('home');
//save draft
Route::post('/saveDraft',[\App\Http\Controllers\DraftController::class, 'saveDraft'])->name('saveDraft');
//preview
Route::post('/preview',[\App\Http\Controllers\DraftController::class, 'preview'])->name('preview');


Route::post('/print',[\App\Http\Controllers\DraftController::class, 'print'])->name('print');
Route::post('/printDraft',[\App\Http\Controllers\DraftController::class, 'printDraft'])->name('printDraft');

//edit draft

Route::get('/edit',[\App\Http\Controllers\DraftController::class, 'edit'])->name('edit');
Route::post('/editPreview',[\App\Http\Controllers\DraftController::class, 'editPreview'])->name('editPreview');
Route::post('/editPreviewPrint',[\App\Http\Controllers\DraftController::class, 'editPreviewPrint'])->name('editPreviewPrint');

Route::post('/editDraft',[\App\Http\Controllers\DraftController::class, 'editDraft'])->name('editDraft');
Route::post('/updateDraft',[\App\Http\Controllers\DraftController::class, 'updateDraft'])->name('updateDraft');
Route::post('/approveDraft',[\App\Http\Controllers\DraftController::class, 'approveDraft'])->name('approveDraft');



//Route::get('/', function () {
//    return view('welcome');
//});
