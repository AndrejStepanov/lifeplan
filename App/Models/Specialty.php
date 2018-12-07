<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Specialty extends Model{
    protected $table = '_specialty';
    protected $primaryKey = 'spec_id';
    protected $dates = [  'created_at', 'updated_at'];
    protected $fillable = ['updated_at', 'created_at', 'rate', 'specDesc', 'whoWork', 'specName', 'specGroup', 'specCode'];

    public  function geSpecialtysForSearch(){
		return  $this->select('spec_id','specDesc','specCode', 'specGroup')->get()->toArray();
	}

}
