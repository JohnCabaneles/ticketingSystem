<?php

namespace App\Http\Controllers\Admin;

use Exception;
use App\Models\Admin\Status;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StatusController extends Controller
{
    public function index() {
        $status = Status::orderBy('created_at', 'desc')->get();

        return response()->json($status);
    }

    public function show($id) {
        $status = Status::findOrFail($id);

        return response()->json($status);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'name' => ['required', 'string', 'max:20']
        ]);

        $formFields['user_id'] = auth()->id();

        $status = Status::create($formFields);

        return response()->json($status, 201);
    }

    public function update(Request $request, $user_id) {
        $formFields = $request->validate([
            'name' => ['required', 'string', 'max:20']
        ]);

        $status = Status::find($user_id);

        if (!$status) {
            return response()->json(['error' => 'No status found'], 404);
        }

        $status->update($formFields);

        return response()->json(['success' => 'Status updated successfully', 'data' => $status]);
    }

    public function destroy($user_id) {
        try {
            $status = Status::findOrFail($user_id);
            $status->delete();
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }
}
