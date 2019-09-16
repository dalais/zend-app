<?php

namespace Application\Controller\Factory;


use Application\Controller\RegistrationController;
use Interop\Container\ContainerInterface;
use Zend\ServiceManager\Factory\FactoryInterface;

/**
 * Это фабрика для RegistrationController. Ее целью является инстанцирование
 * контроллера и внедрение в него зависимостей.
 */
class RegistrationControllerFactory implements FactoryInterface
{
    public function __invoke(ContainerInterface $container, $requestedName, array $options = null)
    {
        $sessionContainer = $container->get('UserRegistration');

        // Инстанцируем контроллер и внедряем зависимости.
        return new RegistrationController($sessionContainer);
    }
}