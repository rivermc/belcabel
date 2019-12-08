<?php
$output = '';
$day_arr = [
  'Пн.',
  'Вт.',
  'Ср.',
  'Чт.',
  'Пт.',
  'Сб.',
  'Вс.'
];
$check_sunday = false;
for ($i=0; $i < 7; $i++) {
    if ($i === 0) {
        $checked = 'checked';
    }
    else {
        $checked = '';
    }
    $check_sunday = false;
    if (date('N', strtotime('+'. $i .' day')) == 7) {
        $check_sunday = true;
    }
    if ($check_sunday == true) {
        $i++;
    }
    $date = date('d.m.Y', strtotime('+'. $i .' day'));
    $day = date('N', strtotime('+'. $i .' day'));
    $input_str = '<div class="date_shipping_wrap"><input type="radio" '. $checked .' id="dateShipping_'. $i .'" name="dateShipping" value="'. $date .'" class="form_input"><label for="dateShipping_'. $i .'" class="form__group_label"><p class="day">'. $day_arr[$day - 1] .'</p><p>'. $date .'</p></label></div>';
    $output .= $input_str;
}
return $output;