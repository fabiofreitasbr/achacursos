<?php
declare(strict_types=1);

namespace App\Controller;

use Cake\ORM\TableRegistry;

class CursosController extends AppController
{
    public function index()
    {
        $tableCourses = TableRegistry::getTableLocator()->get('Courses');
        $cursos = $this->paginate($tableCourses->find('all')->contain(['Photos']));

        $this->set(compact('cursos'));
    }
    public function p($slug = null)
    {
        $tableCourses = TableRegistry::getTableLocator()->get('Courses');
        $curso = $tableCourses->find('all')->where(['slug' => $slug])->contain(['Photos'])->first();

        $this->set(compact('curso'));
    }
    public function add()
    {
        $tableCourses = TableRegistry::getTableLocator()->get('Courses');
        $curso = $tableCourses->newEmptyEntity();
        if ($this->request->is('post')) {
            $curso = $tableCourses->patchEntity($curso, $this->request->getData());
            if ($tableCourses->save($curso)) {
                $this->Flash->success(__('The course has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The course could not be saved. Please, try again.'));
        }
        $this->set(compact('curso'));
    }
    public function edit($id = null)
    {
        $tableCourses = TableRegistry::getTableLocator()->get('Courses');
        $curso = $tableCourses->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $curso = $tableCourses->patchEntity($curso, $this->request->getData());
            if ($tableCourses->save($curso)) {
                $this->Flash->success(__('The course has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The course could not be saved. Please, try again.'));
        }
        $this->set(compact('curso'));
    }
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $tableCourses = TableRegistry::getTableLocator()->get('Courses');
        $curso = $tableCourses->get($id);
        if ($tableCourses->delete($curso)) {
            $this->Flash->success(__('The course has been deleted.'));
        } else {
            $this->Flash->error(__('The course could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
