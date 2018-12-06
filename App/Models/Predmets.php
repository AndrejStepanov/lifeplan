<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Predmets extends Model
{
    protected $table = '_predmets';
    protected $primaryKey = 'pr_id';

    protected $fillable = ['pr_name', 'is_spec','min_val', ];

    public  function getPredmetsList(){
		return  $this->select('pr_id as value','pr_name as text')->orderBy('is_spec')->orderBy('pr_name')->get()->toArray();
	}
    
}
