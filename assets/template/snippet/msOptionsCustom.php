<?php
/** @var modX $modx */
/** @var array $scriptProperties */
$tpl = $modx->getOption('tpl', $scriptProperties, 'tpl.msOptions');
if (!empty($input) && empty($product)) {
    $product = $input;
}
if (!empty($name) && empty($options)) {
    $options = $name;
}

$product = !empty($product) && $product != $modx->resource->id
    ? $modx->getObject('msProduct', array('id' => $product))
    : $modx->resource;
if (!($product instanceof msProduct)) {
    return "[msOptions] The resource with id = {$product->id} is not instance of msProduct.";
}

$names = array_map('trim', explode(',', $options));
$options = array();
$count_limit = 0;
foreach ($names as $name) {
    $count_limit++;
    if (!empty($name) && $option = $product->get($name)) {
        if (!is_array($option)) {
            $option = array($option);
        }
        if (!empty($option[0])) {
            $options[$name] = $option;
        }
    }
}

$limit = $scriptProperties['limit'];
if (!empty($limit) && $limit > 0) {
    $options = array_slice($options, 0, $limit);
}

/** @var pdoTools $pdoTools */
$pdoTools = $modx->getService('pdoTools');
return $pdoTools->getChunk($tpl, array(
    'id' => $product->id,
    'options' => $options,
));