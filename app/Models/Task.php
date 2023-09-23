<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    use HasUlids;

    public function project() {
        return $this->belongsTo(Project::class);
    }

    public function user() {
        return $this->belongsToMany(User::class, 'task_assignee');
    }

    public function comment() {
        return $this->hasMany(Comment::class);
    }
}
