<?php

namespace App\Http\Controllers\Main;
use Illuminate\Support\Facades\Auth;
use App\Models\Specialty;
use App\Http\Controllers\Controller;

use App\Models\match;
use Illuminate\Http\Request;

class SpecController extends Controller
{
    public function show(Request $request)
    {
        $data=$request->all();
        if (isset($data['profID']) && $data['profID']!="") {
            $data = (new Specialty())->getSpecialtyList($data['profID']);
        }else{
            $data = (new Specialty())->getSpecialtyList("");
        }
        return json_encode($data);
    }
}
