<?php

namespace App\Http\Controllers\Admin;

use Exception;
use Illuminate\Http\Request;
use App\Models\Admin\Priority;
use App\Http\Controllers\Controller;

class PriorityController extends Controller
{
    public function index() {
        $priority = Priority::orderBy('created at','desc')->get();

        return response()->json($priority);
    }

    public function show($id) {
        $priority = Priority::findOrFail($id);

        return response()->json($priority);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'name' => ['required','string','max:20']
        ]);

        $formFields['user_id'] = auth()->id();

        $priority = Priority::create($formFields);

        return response()->json($priority, 201);
    }

    public function update(Request $request, $user_id) {
        $formFields = $request->validate([
            'name' => ['required','string','max:20']
        ]);

        $priority = Priority::find($user_id);

        if (!$priority) {
            return response()->json(['error' => 'Priority Not Found'],404);
        }

        $priority->update($formFields);

        return response()->json(['success'=>'Priority successfully updated', 'data' => $priority]);
    }
    
    public function destroy($id) {
        try{
            $priority = Priority::findOrFail($id);
            $priority->delete();
        }catch(Exception $e){
            return response()->json(['error' => $e->getMessage()]);
        }
    }
}
