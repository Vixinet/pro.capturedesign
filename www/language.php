<?php
	
	if( isset($_GET['lang']) && file_exists('_.lang.'.$_GET['lang'].'.php') ) {
		setcookie("USER_LANGUAGE", $_GET['lang']);
	} 

	header("Location: " . $_SERVER['HTTP_REFERER']);
	
?>