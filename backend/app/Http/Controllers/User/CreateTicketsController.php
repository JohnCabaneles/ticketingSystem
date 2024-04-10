<?php

namespace App\Http\Controllers\Users;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Users\CreateTickets;

class CreateTicketsController extends Controller
{
    public function index() {
        $ticket = CreateTickets::orderBy('created_at','desc')->get();

        return response()->json($ticket);
    }

    public function show($id) {
        $ticket = CreateTickets::findOrFail($id);

        return response()->json($ticket);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'name' => ['required','string','max:25'],
            'subject' => ['required','string','max:100'],
            'message' => ['required','string','max:255']
        ]);
 
        $formFields['user_id'] = auth()->id();

        $ticket = CreateTickets::create($formFields);

        return response()->json($ticket, 201);
    }

} 
