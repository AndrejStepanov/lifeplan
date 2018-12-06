<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ege extends Model
{
    protected $table = '_ege';
    protected $primaryKey = 'ege_id';

    /**
     * Получение результатов ЕГЭ по пользователю.
     *
     * @param  $user_id  - Пользователь
     * @return Результаты ЕГЭ
     */
    public function getVal($user_id)
    {
        $result = array(); $i=0;
        $eges = $this->where('user_id', $user_id)->get();

        foreach ($eges as $key=>$ege)
        {
            $pr = predmet::findOrFail($ege->pr_id);
            $result[$i]['pr_id']=$ege->pr_id;
            $result[$i]['pr_name']=$pr->pr_name;
            $result[$i]['min_val']=$pr->min_val;
            $result[$i]['val']=$ege->val;
            $i++;
        }
        return $result;
    }

    /**
     * Создание результата по ЕГЭ.
     *
     * @param  $user_id  - Пользователь
     * @param  $pr_id - Предмет
     * @param  $val - Значение
     * @return Новая запись в таблице
     */
    public function addVal($user_id, $pr_id, $val)
    {
        $ege = new ege;
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
    public function removeVal($ege_id)
    {
        $ege = App\ege::findOrFail($ege_id);
        $ege->delete();
    }

    /**
     * Изменение результата по ЕГЭ.
     *
     * @param  $ege_id
     * @param  $val
     * @return Удалена запись в таблице
     */
    public function editVal($ege_id, $val)
    {
        $ege = App\ege::findOrFail($ege_id);
        $ege->val = $val;
        $ege->save();
    }
}
