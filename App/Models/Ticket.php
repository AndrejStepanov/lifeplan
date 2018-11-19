<?php

namespace App\Models;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;
use App\Events\AuthChange;

class Ticket extends Model{
    protected $table = '_tickets';
    //
    public  function closeTicket( $sysId=0, $userId=0, $oldTicket=0){
        $this->where('session_id',session()->getId() ) ->where('input_date','<=', date("Y-m-d H:i:s"))->where('finish_date','>=', date("Y-m-d H:i:s"))->where('finish_date','>=', date("Y-m-d H:i:s"))
            ->update(['finish_date' => date("Y-m-d H:i:s",time()-  1), 'logout_date' => date("Y-m-d H:i:s",time()-  1)]);
        if($sysId>0 || $userId>0)
            event(new AuthChange([ 'type'=> 'close', 'sysId'=>$sysId, 'userId'=>$userId, 'oldTicket'=>$oldTicket, 'newTicket'=>getTicket() ]));
    }
    
    public  function createTicket(){
        $this->insert(array(
            'input_date'  => date("Y-m-d H:i:s",Auth::user()->dateSt),
            'finish_date' => date("Y-m-d H:i:s",Auth::user()->dateFn),
            'auth_date' => date("Y-m-d H:i:s",Auth::user()->dateSt),
            'cnt_attempts' => 0,
            'sys_id' => Auth::user()->id,
            'user_id' => Auth::user()->userId,
            'user_name' => Auth::user()->name,
            'session_id' => session()->getId(),
            'IP' => Request::ip(),
            'Client' => Request::server('HTTP_USER_AGENT'),
            'is_root'   => Auth::user()->isRoot,
            'allow_objects'=>null,
            'storage'=>Auth::user()->storage,
            'timestamps'=>Auth::user()->timestamps,
            'email'=>Auth::user()->email,
        ));
        Auth::user()->save();
        event(new AuthChange([ 'type'=> 'open', 'sysId'=>Auth::user()->id,'userId'=>Auth::user()->userId, 'name'=>Auth::user()->name, 'isRoot'=>Auth::user()->isRoot, 'oldTicket'=>Auth::user()->oldTicket, 'newTicket'=>getTicket() ]));
    }
}
