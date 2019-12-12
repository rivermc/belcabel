<?php
$file = str_replace("assets/template/images/","",$file);
$root = $_SERVER["DOCUMENT_ROOT"];
$base_dir =  dirname($root). '/' . $_SERVER['SERVER_NAME'] . '/assets/template/images';
include_once($base_dir.'/'. $file);