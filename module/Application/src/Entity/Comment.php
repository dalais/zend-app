<?php

namespace Application\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Comment for blog
 *
 * @ORM\Entity
 * @ORM\Table(name="comment")
 */
class Comment
{
    /**
     * @ORM\Id
     * @ORM\Column(name="id")
     * @ORM\GeneratedValue
     */
    protected $id;

    /**
     * @ORM\Column(name="content")
     */
    protected $content;

    /**
     * @ORM\Column(name="author")
     */
    protected $author;

    /**
     * @ORM\Column(name="date_created")
     */
    protected $dateCreated;

    /**
     * @ORM\Column(name="date_updated")
     */
    protected $dateUpdated;

    // Возвращает ID данного комментария.
    public function getId()
    {
        return $this->id;
    }

    // Задает ID данного комментария.
    public function setId($id)
    {
        $this->id = $id;
    }

    // Возвращает текст комментария.
    public function getContent()
    {
        return $this->content;
    }

    // Устанавливает статус.
    public function setContent($content)
    {
        $this->content = $content;
    }

    // Возвращает имя автора.
    public function getAuthor()
    {
        return $this->author;
    }

    // Задает имя автора.
    public function setAuthor($author)
    {
        $this->author = $author;
    }

    // Возвращает дату создания этого комментария.
    public function getDateCreated()
    {
        return $this->dateCreated;
    }

    // Задает дату создания этого комментария.
    public function setDateCreated($dateCreated)
    {
        $this->dateCreated = $dateCreated;
    }

    // Возвращает дату изменения данного комментария.
    public function getDateUpdated()
    {
        return $this->dateUpdated;
    }

    // Задает дату изменения данного комментария.
    public function setDateUpdated($dateUpdated)
    {
        $this->dateUpdated = $dateUpdated;
    }
}