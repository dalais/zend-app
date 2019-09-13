<?php

namespace Application\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class for Post entity.
 *
 * @ORM\Entity
 * @ORM\Table(name="post")
 */
class Post
{
    // Константы статуса поста.
    const STATUS_DRAFT       = 1;
    const STATUS_PUBLISHED   = 2;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(name="id")
     */
    protected $id;

    /**
     * @ORM\Column(name="title")
     */
    protected $title;

    /**
     * @ORM\Column(name="content")
     */
    protected $content;

    /**
     * @ORM\Column(name="status")
     */
    protected $status;

    /**
     * @ORM\Column(name="date_created")
     */
    protected $dateCreated;

    /**
     * @ORM\Column(name="date_updated")
     */
    protected $dateUpdated;

    // Возвращает ID данного поста.
    public function getId()
    {
        return $this->id;
    }

    // Задает ID данного поста.
    public function setId($id)
    {
        $this->id = $id;
    }

    // Возвращает заголовок.
    public function getTitle()
    {
        return $this->title;
    }

    // Задает заголовок.
    public function setTitle($title)
    {
        $this->title = $title;
    }

    // Возвращает статус.
    public function getStatus()
    {
        return $this->status;
    }

    // Устанавливает статус.
    public function setStatus($status)
    {
        $this->status = $status;
    }

    // Возвращает содержимое поста.
    public function getContent()
    {
        return $this->content;
    }

    // Задает содержимое поста.
    public function setContent($content)
    {
        $this->content = $content;
    }

    // Возвращает дату создания данного поста.
    public function getDateCreated()
    {
        return $this->dateCreated;
    }

    // Задает дату создания данного поста.
    public function setDateCreated($dateCreated)
    {
        $this->dateCreated = $dateCreated;
    }

    // Возвращает дату изменения данного поста.
    public function getDateUpdated()
    {
        return $this->dateUpdated;
    }

    // Задает дату изменения данного поста.
    public function setDateUpdated($dateUpdated)
    {
        $this->dateUpdated = $dateUpdated;
    }
}