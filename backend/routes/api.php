<?php

use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Http\Request;
use App\Models\Users\CreateTickets;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\StatusController;
use App\Http\Controllers\Admin\PriorityController;
use App\Http\Controllers\Admin\DepartmentController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Users\CreateTicketsController;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('admin')->group(function() {
    Route::apiResource('/status', StatusController::class);
    Route::apiResource('/role', RoleController::class);
    Route::apiResource('/department', DepartmentController::class);
    Route::apiResource('/priority',PriorityController::class);
    Route::get('/total/user', [DashboardController::class, 'indexUser']);
    Route::get('/total/admin', [DashboardController::class, 'indexAdmin']);
    Route::get('/total/support', [DashboardController::class, 'indexSupport']);
});

Route::prefix('user')->group(function() {
    Route::apiResource('/create/ticket', CreateTicketsController::class);
});