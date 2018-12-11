<?php

namespace App\Http\Controllers\Main;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\match;
use Illuminate\Http\Request;

class MatchController extends Controller
{
    public function setUserRate(Request $request)
    {
        $data=$request->all();
        if (isset($data['spec_id']) && isset($data['userRate'])){
            (new match())->setUserRate($data['spec_id'], $data['userRate']);
        }
        return;
    }
}
