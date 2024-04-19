<?php

use Illuminate\Http\Request;
use App\Models\User\CreateTickets;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\StatusController;
use App\Http\Controllers\Admin\PriorityController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DepartmentController;
use App\Http\Controllers\Admin\TicketController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\User\CreateTicketsController;
use App\Http\Controllers\User\UserStatusController;
use App\Http\Controllers\vendor\Chatify\MessagesController;

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
    Route::apiResource('/ticket',TicketController::class);
    Route::get('/total/user', [DashboardController::class, 'indexUser']);
    Route::get('/total/admin', [DashboardController::class, 'indexAdmin']);
    Route::get('/total/support', [DashboardController::class, 'indexSupport']);
});

Route::prefix('user')->group(function() {
    Route::get('/total/resolved', [UserStatusController::class,'indexResolved']);
    Route::get('/total/pending', [UserStatusController::class,'indexPending']);
    Route::get('/total/ongoing', [UserStatusController::class,'indexOngoing']);
});

/**
 * Send message route
 */
Route::post('/send/ticket', [MessagesController::class, 'send']);