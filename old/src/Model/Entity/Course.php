<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Course Entity
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property string $institution
 * @property string $type
 * @property string $state
 * @property string $city
 * @property string $price
 * @property string $method
 * @property string $description
 * @property string $duration
 * @property string $link
 * @property string $video
 * @property int $status
 *
 * @property \App\Model\Entity\Photo[] $photos
 */
class Course extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array<string, bool>
     */
    protected $_accessible = [
        'name' => true,
        'slug' => true,
        'institution' => true,
        'type' => true,
        'state' => true,
        'city' => true,
        'price' => true,
        'method' => true,
        'description' => true,
        'duration' => true,
        'link' => true,
        'video' => true,
        'status' => true,
        'photos' => true,
    ];
}
