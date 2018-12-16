<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Astro extends Model
{
    protected $table = '_astro';
    protected $primaryKey = 'rec_id';

	protected $dates = [  'created_at', 'updated_at'];

	protected $fillable = ['name','description'];

  	public  function getResultForUser(){
		return $this->select('_astro.rec_id','_astro.name', '_astro2user.description', '_astro2user.rate', '_astro2user.rec_id as id')
			->join('_astro2user', '_astro2user.astro_id', '=', '_astro.rec_id')
			->where('user_id' ,'=', Auth::user()->id)
			->orderBy('name')
			->get()->toArray();
	}
	
}
