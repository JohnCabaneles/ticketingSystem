<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function indexAdmin() { // 1 = superadmin, 2 = admin, 3 = support, 4 = user
        $user = DB::table('users')->where('roles_id', 1)->get();

        return response()->json($user);
    }

    public function indexUser() {
        $user = User::all();

        return response()->json($user);
    }

    public function indexSupport() {
        $user = DB::table('users')->where('roles_id', 3)->get();

        return response()->json($user);
    }
}
