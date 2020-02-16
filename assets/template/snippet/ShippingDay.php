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
for ($i=0; $i < 6; $i++) {
    if ($i === 0) {
        $checked = 'checked';
    }
    else {
        $checked = '';
    }
    $check_sunday = false;
    $date = date('d.m.Y', strtotime('+'. $i .' day'));
    $day = date('N', strtotime('+'. $i .' day'));
    $input_str = '<div class="date_shipping_wrap"><input type="radio" '. $checked .' id="dateShipping_'. $i .'" name="dateShipping" value="'. $date .'" class="form_input" hidden><label for="dateShipping_'. $i .'" class="form__group_label"><p class="day">'. $day_arr[$day - 1] .'</p><p>'. $date .'</p></label></div>';
    $output .= $input_str;
}
return $output;