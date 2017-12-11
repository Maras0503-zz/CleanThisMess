<?php

  $serwer = "mpiesik.pl";
  $user = "marek050_storage";
  $password = "marek123";
  $db = "marek050_waste";
  
  // Create connection
  $mysqli = new mysqli($serwer, $user, $password, $db);
  $mysqli->set_charset("utf8");