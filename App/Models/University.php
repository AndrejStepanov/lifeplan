<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class University extends Model{
    protected $table = '_university';
    protected $primaryKey = 'uni_id';
    protected $dates = [  'date_born', 'date_accreditation', 'created_at', 'updated_at'];
    protected $fillable = ['city_id', 'is_state', 'is_hostel', 'hostel_proc', 'hostel_places', 'is_accreditation', 'is_military', 'is_sub', 'address', 'web_site', 'email', 'phones', 'abouts', 'created_at', 'updated_at', 'uni_img', 'rate', 'rate_place', 'qty_students', 'uni_name', 'date_born', 'date_accreditation' ];

    public  function getUniversitysList(){
		return  $this->select('uni_id as value','uni_name as text')->orderBy('city_id')->orderBy('uni_name')->get()->toArray();
	}
}
