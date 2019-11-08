<?php
require_once '/PHPMailer/PHPMailerAutoload.php';

$user = $_POST['user'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$button = $_POST['button'];
 
$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
 
// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
 
$mail->Host = 'ssl://smtp.gmail.com';
$mail->Port = 465;
$mail->Username = 'mailfortestapelsin16';
$mail->Password = '159753qwe';
 
// От кого
$mail->setFrom('mailfortestapelsin16@gmail.com', 'Test');		
 
// Кому
$mail->addAddress('mailfortestapelsin16@gmail.com', 'Тест Тест');
 
// Тема письма
$mail->Subject = $subject;
 
// Тело письма
$body = "<p>Имя $user<br> E-mail $email<br> Телефон $tel<br> Кнопка $button </p>";
$mail->msgHTML($body);
 
// Приложение
$mail->addAttachment(__DIR__ . '/image.jpg');
 
$mail->send();