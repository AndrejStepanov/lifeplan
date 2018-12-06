<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profession extends Model{
    protected $table = '_profession';
    protected $primaryKey = 'prof_id';
	protected $dates = [  'updated_at', 'created_at',];
    protected $fillable = ['prof_group', 'prof_name', 'prof_rate', 'prof_img', 'updated_at', 'created_at', 'about'];
    
    public  function getProfessionsList(){
		return  $this->select('prof_id as value','prof_name as text', 'prof_group as profGroup')->orderBy('prof_group')->orderBy('prof_name')->get()->toArray();
	}
}
