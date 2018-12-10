<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class match extends Model
{
    protected $table = '_match';
    protected $primaryKey = 'mat_id';
    protected $dates = [  'created_at', 'updated_at'];
    protected $fillable = ['updated_at', 'created_at', 'user_id', 'prof_id', 'rate', 'type'];

    public function Profession()
    {
        return $this->belongsTo('App\Models\Profession', 'prof_id', 'prof_id');
    }

    public function spec2profs()
    {
        return $this->hasMany('App\Models\spec2prof', 'prof_id', 'prof_id');
    }
    public function getProfAstro()
    {
        return $this->where('user_id',Auth::user()->id)->where('type','astro')->get();
    }
    public function getProfTest()
    {
        return $this->where('user_id',Auth::user()->id)->where('type','test')->get();
    }
    public function getSpecs()
    {
        $data = $this->with("spec2profs")->where('user_id',Auth::user()->id)->distinct('spec_id')->get();

        return $data;
        /*
        return $this->join('_spec2prof', '_spec2prof.prof_id', '=', '_match.prof_id')
                    ->where('user_id',Auth::user()->id)
                    ->get();
*/
        //prof_ids
        //spec2prof -- spec

/*
        $this->join('_spec2prof', 'users.id', '=', 'contacts.user_id')
            ->join('orders', 'users.id', '=', 'orders.user_id')
            ->select('users.id', 'contacts.phone', 'orders.price');
        ->get();
 */


    }
}
