<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Specialty extends Model{
    protected $table = '_specialty';
    protected $primaryKey = 'spec_id';
    protected $dates = [  'created_at', 'updated_at'];
    protected $fillable = ['updated_at', 'created_at', 'rate', 'specDesc', 'whoWork', 'specName', 'specGroup', 'specCode'];

    public  function getSpecialtysForSearch(){
		return  convertToAssArr ($this->select('spec_id','specDesc','specCode', 'specGroup', 'specName')->get()->toArray(),$this->primaryKey);
	}

}
