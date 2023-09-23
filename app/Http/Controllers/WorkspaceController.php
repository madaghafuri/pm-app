<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Workspace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WorkspaceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $auth = Auth::user();
        $user = User::all()->where('id', '=', $auth->id)->first();
        $workspace = new Workspace([
            'name' => "$auth->name's workspace",
            'description' => 'A workspace'
        ]);

        $user->workspace()->save($workspace);

        return redirect()->to('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(Workspace $workspace)
    {
        //
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Workspace $workspace)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Workspace $workspace)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Workspace $workspace)
    {
        //
    }
}
