<?php
namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Application\Form\RegistrationForm;
use Zend\Session\Container;

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
        // Определяем текущий шаг.
        $step = 1;
        if (isset($this->sessionContainer->step)) {
            $step = $this->sessionContainer->step;
        }

        // Проверка номера шага на корректность (от 1 до 3).
        if ($step<1 || $step>3)
            $step = 1;

        if ($step==1) {
            // Инициализируем выборы пользователя.
            $this->sessionContainer->userChoices = [];
        }

        $form = new RegistrationForm($step);

        // Проверяем, отправил ли пользователь форму.
        if($this->getRequest()->isPost()) {

            // Заполняем форму POST-данными.
            $data = $this->params()->fromPost();

            $form->setData($data);

            // Валидируем форму.
            if($form->isValid()) {

                // Получаем отфильтрованные и валидированные данные.
                $data = $form->getData();

                // Сохраняем выборы пользователя в сессии.
                $this->sessionContainer->userChoices["step$step"] = $data;

                // Увеличиваем шаг.
                $step ++;
                $this->sessionContainer->step = $step;

                // Если мы прошли все 3 шага, перенаправляем на страницу проверки данных Review.
                if ($step>3) {
                    return $this->redirect()->toRoute('registration',
                        ['action'=>'review']);
                }

                // Переходим на следующий шаг.
                return $this->redirect()->toRoute('registration');
            }
        }

        $viewModel = new ViewModel([
            'form' => $form
        ]);
        $viewModel->setTemplate("application/registration/step$step");

        return $viewModel;
    }

    /**
     * Действие "review" отображает страницу, позволяющую проверить данные, введенные на
     * предыдущих шагах.
     */
    public function reviewAction()
    {
        // Валидируем данные сессии.
        if(!isset($this->sessionContainer->step) ||
            $this->sessionContainer->step<=3 ||
            !isset($this->sessionContainer->userChoices)) {
            throw new \Exception('Извините, данные пока не доступны для проверки');
        }

        // Извлекаем из сессии выборы пользователя.
        $userChoices = $this->sessionContainer->userChoices;

        return new ViewModel([
            'userChoices' => $userChoices
        ]);
    }
}