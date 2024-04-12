<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Admin\Department;
use App\Http\Controllers\Controller;

class DepartmentController extends Controller
{
    public function index() {
        $department = Department::orderBy('created_at', 'desc')->get();

        return response()->json($department);
    }

    public function show($id) {
        $department = Department::findOrFail($id);

        return response()->json($department);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'name' => ['required', 'string', 'max:25']
        ]);

        $formFields['user_id'] = auth()->id();

        $department = Department::create($formFields);

        return response()->json($department, 201);
    }

    public function update(Request $request, $user_id) {
        $formFields = $request->validate([
            'name' => ['required', 'string', 'max:25']
        ]);

        $department = Department::find($user_id);

        if(!$department) {
            return response()->json(['error' => 'No department found'], 404);
        }

        $department->update($formFields);

        return response()->json(['success' => 'Department updated successfully', 'data' => $department]);
    }

    public function destroy($user_id) {
        try {
            $department = Department::findOrFail($user_id);
            $department->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }
}
