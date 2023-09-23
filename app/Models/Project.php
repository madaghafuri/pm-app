<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    public function workspace() {
        return $this->belongsTo(Workspace::class);
    }

    public function task() {
        return $this->hasMany(Task::class);
    }

    protected $fillable = [
        'name',
        'start_date',
        'end_date',
        'workspace_id'
    ];
}
