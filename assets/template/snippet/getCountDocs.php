<?php
$count = 0;
$parent = isset($parent) ? (integer) $parent : 0;
if ($parent > 0) {

    $childIds = $modx->getChildIds($parent,6,array(
        'deleted' => false,
        'published' => true,
        'template' => $template,
        'context' => 'web'
        ));

}
return (string) count($childIds);
?>