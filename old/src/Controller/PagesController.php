<?php
declare(strict_types=1);

/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link      https://cakephp.org CakePHP(tm) Project
 * @since     0.2.9
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 */
namespace App\Controller;

use Cake\Core\Configure;
use Cake\Http\Exception\ForbiddenException;
use Cake\Http\Exception\NotFoundException;
use Cake\Http\Response;
use Cake\View\Exception\MissingTemplateException;
use Cake\ORM\TableRegistry;

class PagesController extends AppController
{
    public function display(string ...$path): ?Response
    {
        if (!$path) {
            return $this->redirect('/');
        }
        if (in_array('..', $path, true) || in_array('.', $path, true)) {
            throw new ForbiddenException();
        }
        $page = $subpage = null;

        if (!empty($path[0])) {
            $page = $path[0];
        }
        if (!empty($path[1])) {
            $subpage = $path[1];
        }
        $this->set(compact('page', 'subpage'));



        $tableCursos = TableRegistry::getTableLocator()->get('Courses');
        $cursosRecentes = $tableCursos->find('all')->limit(4)->contain(['Photos'])->order(['id' => 'DESC']);
        $destaque1 = $tableCursos->find('all')->limit(3)->contain(['Photos'])->where(['OR' => [['slug' => 'PS232'], ['slug' => 'Ps222'], ['slug' => 'PSCA30020']]]);
        $destaque2 = $tableCursos->find('all')->limit(4)->contain(['Photos'])->where(['OR' => [['slug' => 'Ps150'], ['slug' => 'Ps147'], ['slug' => 'Ps145'], ['slug' => 'Ps143']]]);

        $this->set(compact('destaque1'));
        $this->set(compact('destaque2'));
        $this->set(compact('cursosRecentes'));



        try {
            return $this->render(implode('/', $path));
        } catch (MissingTemplateException $exception) {
            if (Configure::read('debug')) {
                throw $exception;
            }
            throw new NotFoundException();
        }
    }
}
