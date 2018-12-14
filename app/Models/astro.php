<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Astro extends Model
{
    protected $table = '_astro';
    protected $primaryKey = 'rec_id';

	protected $dates = [  'created_at', 'updated_at'];

	protected $fillable = ['name','description'];

}
