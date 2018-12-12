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
    public function setTestRate(Request $request){
        $data=$request->all();
        if (isset($data['todo'])){
            // todo = 12|4;3|-3;5|4
            $tmp=explode(";",$data['todo']);
            $kol = sizeof($tmp);
            for($i=0;$i<$kol;$i++){
                $pr = explode("|", $tmp[$i]);
                $prof_id=$pr[0];
                $rate=$pr[1];
                (new match())->setTestRate($prof_id, $rate);
            }
        }
        return;
    }
}
