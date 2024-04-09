<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rules\Password;

class RegisteredUserController extends Controller
{
    public function index() {
        $user = User::all();

        return response()->json($user);
    }


    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'roles_id' => ['required', 'string', 'max:50'],
            'department' => ['required', 'string', 'max:50'],
            'contact_number' => ['required', 'string', 'max:15'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults('password123')],
        ]);

        $formFields['user_id'] = auth()->id();
        
        $user = User::create([
            'name' => $request->name,
            'roles_id' => $request->role,
            'department' => $request->department,
            'contact_number' => $request->contact_number,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);


        return response()->json($user, 201);
    }
}
