<?php

namespace Api;

use Doctrine\ORM\Mapping\Driver\AnnotationDriver;
use Zend\Router\Http\Regex;
use Zend\Router\Http\TreeRouteStack;
use Zend\ServiceManager\Factory\InvokableFactory;

return [
    'controllers' => [
        'factories' => [
            Controller\V1\IndexController::class => InvokableFactory::class,
        ],
    ],
    'router' => [
        'router_class' => TreeRouteStack::class,
        'routes' => [
            'api_v1' => [
                'type'    => Regex::class,
                'options' => [
                    'regex'    => '/api/v1',
                    'spec' => ''
                ],
                'child_routes' => [
                    'index' => [
                        'type'    => Regex::class,
                        'options' => [
                            'regex'    => '/index',
                            'defaults' => [
                                'controller'    => Controller\V1\IndexController::class,
                                'action'        => 'index',
                            ],
                            'spec' => ''
                        ],
                    ],
                    'version' => [
                        'type'    => Regex::class,
                        'options' => [
                            'regex'    => '/version',
                            'defaults' => [
                                'controller'    => Controller\V1\IndexController::class,
                                'action'        => 'version',
                            ],
                            'spec' => ''
                        ],
                    ],
                ]
            ],
        ],
    ],
    /*'view_manager' => [
        'template_path_stack' => [
            'Api' => __DIR__ . '/../view',
        ],
    ],*/
    'doctrine' => [
        'driver' => [
            __NAMESPACE__ . '_driver' => [
                'class' => AnnotationDriver::class,
                'cache' => 'array',
                'paths' => [__DIR__ . '/../src/Entity']
            ],
            'orm_default' => [
                'drivers' => [
                    __NAMESPACE__ . '\Entity' => __NAMESPACE__ . '_driver'
                ]
            ]
        ]
    ]
];
