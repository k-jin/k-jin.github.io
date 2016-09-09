<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $msg = $_POST['msg'];

    $message = "Sender: ".$name."\n"."Reply-to: ".$email."\n".$msg;
//send email
    mail("kjin@u.northwestern.edu", "WEBSITE EMAIL: ".$subject, $message);
}
?>