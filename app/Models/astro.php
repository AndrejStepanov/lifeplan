<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class astro extends Model
{
    protected $table = '_astro';
    protected $primaryKey = 'rec_id';
    //

    /**
     * Scope a query to only include users of a given type.
     *
     * @param  \Illuminate\Database\Eloquent\Builder $query
     * @param  mixed $type
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOfDate($query, $date)
    {
        return $query->where('on_date_utc', $date);
    }
}
