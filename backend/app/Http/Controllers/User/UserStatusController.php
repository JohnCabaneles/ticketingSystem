<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class UserStatusController extends Controller
{
    // 1 = resolved, 2 = pending, 3 = ongoing
    public function indexResolved() {
        $resolved = DB::table('create_tickets')->where('statuses_id', 1)->get();

        return response()->json($resolved);
    } 

    public function indexPending() {
        $pending = DB::table('create_tickets')->where('statuses_id', 2)->get();

        return response()->json($pending);
    } 

    public function indexOngoing() {
        $ongoing = DB::table('create_tickets')->where('statuses_id', 3)->get();

        return response()->json($ongoing);
    } 



}
