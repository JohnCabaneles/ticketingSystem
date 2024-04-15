<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\User\CreateTickets;
use App\Http\Controllers\Controller;

class TicketController extends Controller
{
    public function index() {
        $ticket = CreateTickets::with('user')->orderBy('created_at', 'desc')->get();
        
        return response()->json($ticket);
    }

    public function update(Request $request) {
        try {
            $role = $this->user('admin');
    
            if($role === 'admin') {
                $formFields = $request->validate([
                    'assign_to' => 'string'
                ]);
            }
            
            $role->update($formFields);

            return response()->json($role, 201);
            
        } catch (\Exception $e) {
            return response()->json(['Error' => $e->getMessage()]);
        }
        
    }
}
