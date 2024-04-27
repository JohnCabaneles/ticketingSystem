<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\ChMessage;
use App\Models\Admin\Role;
use App\Models\Admin\Status;
use App\Models\Admin\Priority;
use App\Models\Admin\Department;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'role',
        'department',
        'contact_number',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function status() {
        return $this->hasOne(Status::class, 'user_id');
    }

    public function priority() {
        return $this->hasOne(Priority::class, 'user_id');
    }

    public function department() {
        return $this->hasOne(Department::class, 'user_id');
    }

    public function role() {
        return $this->hasOne(Role::class, 'user_id');
    }

    public function chMessage() {
        return $this->hasOne(ChMessage::class, 'user_id');
    }

}
