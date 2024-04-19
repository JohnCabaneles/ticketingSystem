<?php

namespace App\Models;

use App\Models\User;
use Chatify\Traits\UUID;
use Illuminate\Database\Eloquent\Model;

class ChMessage extends Model
{
    use UUID;

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
      }
}
