<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Astro2User extends Model
{
    protected $table = '_astro2user';
    protected $primaryKey = 'rec_id';

	protected $dates = [  'created_at', 'updated_at'];

	protected $fillable = ['astro_id','user_id','rate'];

}
