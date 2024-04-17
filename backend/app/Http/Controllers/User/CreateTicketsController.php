<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User\CreateTickets;

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
            'subject' => ['required','string','max:100'],
            'message' => ['required','string','max:255'],
            'departments_id' => ['string', 'max:50'],
            'priorities_id' => ['string', 'max:50'],
            'statuses_id' => ['string', 'max:50'],
        ]);
 
        $formFields['user_id'] = auth()->id();
        $formFields['created_by'] = auth()->id();

        $ticket = CreateTickets::create($formFields);

        return response()->json($ticket, 201);
    }

    

} 
