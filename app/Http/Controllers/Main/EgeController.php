<?php

namespace App\Http\Controllers\Main;
use Illuminate\Support\Facades\Auth;
use App\Models\ege;
use App\Http\Controllers\Controller;

class EgeController extends Controller
{
    public function show()
    {
        $data = (new ege())->getVal(Auth::user()->id);
        return json_encode($data);
    }
}
