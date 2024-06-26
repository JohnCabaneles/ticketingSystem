<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;

Route::middleware('auth:sanctum')->match(['get'], '/dashboard', function (Request $request) {
    // Retrieve user data from the authenticated user
    $user = $request->user();

    $userData = [
        'contact_number' => $user->contact_number,
        'email' => $user->email,
        'name' => $user->name,
        'department' => $user->department,
        'role' => $user->role,
        // Add any other relevant user data
    ];

    return response()->json(['user' => $userData]);
});

Route::post('/register', [RegisteredUserController::class, 'store']);

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
                ->middleware('guest')
                ->name('login');

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
                ->middleware('guest')
                ->name('password.email');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
                ->middleware('guest')
                ->name('password.store');

Route::get('/verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['auth', 'signed', 'throttle:6,1'])
                ->name('verification.verify');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware(['auth', 'throttle:6,1'])
                ->name('verification.send');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
                ->middleware('auth')
                ->name('logout');
