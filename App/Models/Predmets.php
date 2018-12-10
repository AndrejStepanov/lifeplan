<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Predmets extends Model{
    protected $table = '_predmets';
    protected $primaryKey = 'pr_id';

    protected $fillable = ['prName', 'isSpec','minVal', ];

    public  function getPredmetsList(){
		return  $this->select('pr_id as value','prName as text')->orderBy('isSpec')->orderBy('prName')->get()->toArray();
    }
    public  function getPredmetsListAss(){
		return   convertToAssArr ($this->getPredmetsList(),'value');
	}
    
}
