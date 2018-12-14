<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Astro2Prof extends Model
{
    protected $table = '_astro2prof';
    protected $primaryKey = 'rec_id';

	protected $dates = [  'created_at', 'updated_at'];

	protected $fillable = ['astro_id','prof_id'];

}
