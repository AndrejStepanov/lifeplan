<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Ege extends Model{
    protected $table = '_ege';
    protected $primaryKey = 'ege_id';

	protected $dates = [  'created_at', 'updated_at'];

	protected $fillable = ['user_id', 'pr_id','val', 'created_at', 'updated_at'];
    
    /**
     * Получение результатов ЕГЭ по пользователю.
     *
     * @param  $user_id  - Пользователь
     * @return Результаты ЕГЭ
     */
    public function getVal($user_id)  {
        $result = array();
        $eges = $this->where('user_id', $user_id)->get();
        foreach ($eges as $key=>$ege) {
            $pr = Predmets::findOrFail($ege->pr_id);
            $result[]= ['prId' => $ege->pr_id,  'prName'=> $pr->pr_name, 'minVal' => $pr->min_val, 'val'=>$ege->val];
        }
        return $result;
    }

    /**
     * Указание результатов по ЕГЭ.
     * */
    public  function saveEge($data){
        $this->where('user_id' ,'=', Auth::user()->id)->delete();
        if($data!=null)
		    foreach($data['todo'] as $row)
                $this::create([
                    'user_id' => Auth::user()->id,
                    'pr_id' => $row['prId'],
                    'val' => $row['val'],
                    'created_at' =>date("Y-m-d H:i:s", time()),
                ]);
    }
    /**
     * Создание результата по ЕГЭ.
     *
     * @param  $user_id  - Пользователь
     * @param  $pr_id - Предмет
     * @param  $val - Значение
     * @return Новая запись в таблице
     */
    public function addVal($user_id, $pr_id, $val)    {
        $ege = new Ege;
        $ege->user_id = $user_id;
        $ege->pr_id = $pr_id;
        $ege->val = $val;

        $ege->save();
    }

    /**
     * Удаление результата по ЕГЭ.
     *
     * @param  $ege_id
     * @return Удалена запись в таблице
     */
    public function removeVal($ege_id)    {
        $ege = App\Ege::findOrFail($ege_id);
        $ege->delete();
    }

    /**
     * Изменение результата по ЕГЭ.
     *
     * @param  $ege_id
     * @param  $val
     * @return Удалена запись в таблице
     */
    public function editVal($ege_id, $val)    {
        $ege = App\Ege::findOrFail($ege_id);
        $ege->val = $val;
        $ege->save();
    }
}
