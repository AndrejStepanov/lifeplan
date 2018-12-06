<?php

namespace App\Http\Controllers\Main;
use Illuminate\Support\Facades\Auth;
use App\Models\Profession;
use App\Http\Controllers\Controller;

class ProfController extends Controller
{
    public function show()
    {
        $data = (new Profession())->getProfessionsList();
        return json_encode($data);
    }
    public function show2()
    {
        $data = (new Profession())->getProfessionsList2();
        return json_encode($data);
    }
}
