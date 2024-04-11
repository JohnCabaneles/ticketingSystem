<?php

namespace App\Models\Users;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CreateTickets extends Model
{
    use HasFactory;
  
    protected $guarded = []; 

  public function user() {
    return $this->belongsTo(User::class, 'user_id');
  }
}
