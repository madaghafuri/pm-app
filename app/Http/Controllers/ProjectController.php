<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use App\Models\Workspace;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    //

    public function create() {
        return Inertia::render('Project/Create', [
            ''
        ]);
    }

    public function store(Request $request) {
        $workspaceId = User::where('id', '=', $request->user()->id)->first()->workspace()->first()->id;

        Workspace::where('id', '=', $workspaceId)->first()->project()->create([
            'name' => $request->name,
            'start_date' => Carbon::now(),
            'end_date' => Carbon::now(),
        ]);

        return redirect('/dashboard');
    }

    public function show(Workspace $workspace, Project $project) {
        error_log($workspace);

        $projectList = $workspace->project()->get();

        return Inertia::render('Project/Show', [
            'workspace' => $workspace,
            'project' => $project,
            'projectList' => $projectList
        ]);
    }
}
