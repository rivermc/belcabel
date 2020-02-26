<?php

$email=trim($_POST["email"]);
$email=strip_tags($email);
$name=trim($_POST["name"]);
$name=strip_tags($name);
$phone=trim($_POST["phone"]);
$phone=strip_tags($phone);
$IDForm=trim($_POST["IDForm"]);
$IDForm=strip_tags($IDForm);
$theme = 'Интернет магазин БелКабель - Пришла заявка на звонок';

//-------------------------------------------------------------------------//
    // Send To Email //
//-------------------------------------------------------------------------//

if ( $phone != '' ) {
          
  $emailTo = "info@belkabel.ru, web@2f-vsk.ru";
  $emailFrom ="info@belkabel.ru";

  $emailTitle = $theme;
  $emailTitle = iconv("utf-8","windows-1251",$emailTitle);
  $emailTitle = convert_cyr_string($emailTitle, "w", "k");

  $emailText="<html><head></head><body>";
  $emailText.="<b>Телефон:</b> {$phone} </br>";
  $emailText.="</body></html>";
  $emailText=iconv("utf-8","windows-1251",$emailText);
  $emailText=convert_cyr_string($emailText, "w", "k");

  $emailHeaders="MIME-Version: 1.0\r\n";
  $emailHeaders.="Content-Type: text/html; charset=koi8-r\r\n";
  $emailHeaders.="From: $emailFrom\r\n";

  mail($emailTo, $emailTitle, $emailText, $emailHeaders);
  echo 'true';
}

?>