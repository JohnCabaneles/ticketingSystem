<?php

namespace App\Http\Controllers\Admin;

use App\Models\Admin\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RoleController extends Controller
{
    public function index() {
        $role = Role::orderBy('created_at', 'desc')->get();

        return response()->json($role);
    }

    public function show($id) {
        $role = Role::findOrFail($id);

        return response()->json($role);
    }

    public function store(Request $request) {
        $formFields = $request->validate([
            'name' => ['required', 'string', 'max:25']
        ]);

        $formFields['user_id'] = auth()->id();

        $role = Role::create($formFields);

        return response()->json($role, 201);
    }

    public function update(Request $request, $user_id) {
        $formFields = $request->validate([
            'name' => ['required', 'string', 'max:25']
        ]);

        $role = Role::find($user_id);

        if (!$role) {
            return response()->json(['error' => 'Role not found'], 404);
        }

        $role->update($formFields);

        return response()->json(['success' => 'Role updated successfully', 'data' => $role]);
    }

    public function destroy($user_id) {
        try {
            $role = Role::findOrFail($user_id);
            $role->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }
}
