<?php
ini_set('max_execution_time', 300);
set_time_limit(300);


define('MODX_API_MODE', true);
require_once dirname(dirname(dirname(dirname(__FILE__)))).'/index.php';
$modx->getService('error','error.modError');
$modx->getRequest();
$modx->setLogLevel(modX::LOG_LEVEL_ERROR);
$modx->setLogTarget('FILE');
$modx->error->message = null;
/*
$modx->log(1, print_r($action, 1));
$modx->log(1, print_r($chunk, 1));
$modx->log(1, print_r($params, 1));
*/

$output = $modx->runSnippet('msProducts', array(
    'parents' => 0,
    'includeTVs' => 'Characters',
    'limit' => 0,
    'where' => '{"class_key":"msProduct"}',
    'tpl' => '@INLINE "[[+id]]";"[[+Characters]]";'
));

//var_dump($output);
$file = dirname(dirname(dirname(dirname(__FILE__)))) . '/export.csv';
// Открываем файл для получения существующего содержимого
$current = file_get_contents($file);
// Добавляем нового человека в файл
$current .= $output . "\n";
// Пишем содержимое обратно в файл
file_put_contents($file, $current);


@session_write_close();
exit($output);