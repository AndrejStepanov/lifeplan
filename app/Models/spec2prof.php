<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class spec2prof extends Model
{
    protected $table = '_spec2prof';
    protected $primaryKey = 'rec_id';
    protected $dates = [  'created_at', 'updated_at'];
    protected $fillable = ['rec_id', 'spec_id','prof_id', 'updated_at', 'created_at'];

    public function Specialty()
    {
        return $this->belongsTo('App\Models\Specialty','spec_id','spec_id');
    }
    public function Profession()
    {
        return $this->belongsTo('App\Models\Profession','prof_id','prof_id');
    }
}
