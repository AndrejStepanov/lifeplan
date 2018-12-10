<?php

namespace App\Http\Controllers\Main;
use Illuminate\Support\Facades\Auth;
use App\Models\Specialty;
use App\Http\Controllers\Controller;

use App\Models\match;

class SpecController extends Controller
{
    public function show()
    {
        $data = (new Specialty())->getSpecialtyList();
        return json_encode($data);
    }
    public function show2()
    {
        $data = (new match())->getSpecs();
        return $data;
    }
}
