<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Course $course
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Form->postLink(
                __('Delete'),
                ['action' => 'delete', $course->id],
                ['confirm' => __('Are you sure you want to delete # {0}?', $course->id), 'class' => 'side-nav-item']
            ) ?>
            <?= $this->Html->link(__('List Courses'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="courses form content">
            <?= $this->Form->create($course) ?>
            <fieldset>
                <legend><?= __('Edit Course') ?></legend>
                <?php
                    echo $this->Form->control('name');
                    echo $this->Form->control('slug');
                    echo $this->Form->control('institution');
                    echo $this->Form->control('type');
                    echo $this->Form->control('state');
                    echo $this->Form->control('city');
                    echo $this->Form->control('price');
                    echo $this->Form->control('method');
                    echo $this->Form->control('description');
                    echo $this->Form->control('duration');
                    echo $this->Form->control('link');
                    echo $this->Form->control('video');
                    echo $this->Form->control('status');
                ?>
            </fieldset>
            <?= $this->Form->button(__('Submit')) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>
