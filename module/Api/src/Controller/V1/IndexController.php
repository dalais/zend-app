<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonModule for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Api\Controller\V1;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\JsonModel;

class IndexController extends AbstractActionController
{
    public function indexAction()
    {
        return new JsonModel([
            'status' => 'SUCCESS',
            'message'=>'Here is your index'
        ]);
    }

    public function someAction()
    {
        return new JsonModel([
            'status' => 'SUCCESS',
            'message'=>'This is some action'
        ]);
    }
}
