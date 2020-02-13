<?php

// Если запрос не AJAX или не передано действие, выходим
if ($_SERVER['HTTP_X_REQUESTED_WITH'] != 'XMLHttpRequest' || empty($_REQUEST['action'])) {exit();}


$action = $_REQUEST['action'];
$chunk = $_REQUEST['chunk'];
$params = $_REQUEST['params'];


define('MODX_API_MODE', true);
require_once dirname(dirname(dirname(dirname(__FILE__)))).'/index.php';
/*
$modx->getService('error','error.modError');
$modx->getRequest();
$modx->setLogLevel(modX::LOG_LEVEL_ERROR);
$modx->setLogTarget('FILE');
$modx->error->message = null;

$modx->log(1, print_r($action, 1));
$modx->log(1, print_r($chunk, 1));
$modx->log(1, print_r($params, 1));
$modx->log(1, print_r($delimiter, 1));
*/



$params = json_decode($params, true);

switch ($action) {
    case 'Chunk':
        if (!empty($params)) {
           $output = $modx->getChunk($chunk, $params);
        }
        else {
            $output = $modx->getChunk($chunk);
        }
        break;
    case 'Snippet':
        if (!empty($params)) {
           $output = $modx->runSnippet($chunk, $params);
        }
        else {
            $output = $modx->runSnippet($chunk);
        }
        break;
}

@session_write_close();
exit($output);