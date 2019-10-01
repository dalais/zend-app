<?php
namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\Session\Container;
use Zend\View\Model\JsonModel;

/**
 * Это класс контроллера, отображающий страницу с формой регистрации пользователя.
 * Регистрация состоит из нескольких шагов, так что для каждого шага мы будем отображать
 * разные элементы формы. Мы используем контейнер сессии для запоминания выбора пользователя
 * на предыдущих шагах.
 */
class RegistrationController extends AbstractActionController
{
    /**
     * Контейнер сессии.
     * @var Container
     */
    private $sessionContainer;

    /**
     * Конструктор. Его целью является внедрение зависимостей в контроллер.
     */
    public function __construct($sessionContainer)
    {
        $this->sessionContainer = $sessionContainer;
    }

    /**
     * Действие по умолчанию "index". Оно отображает
     * страницу регистрации.
     */
    public function indexAction()
    {
        return new JsonModel([
            'status' => 'SUCCESS',
            'message'=>'Here is your data',
            'data' => [
                'full_name' => 'John Doe',
                'address' => '51 Middle st.'
            ]
        ]);
    }
}