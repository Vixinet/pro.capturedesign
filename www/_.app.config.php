<?php
	
	define('PATH_CACHE', 'public/');
	define('PATH_TEMPLATES', 'templates/');

	if( isset($_COOKIE['USER_LANGUAGE']) ) {
		$lang = $_COOKIE['USER_LANGUAGE'];
	} else {
		$lang = 'en';
	}

	include_once('_.lang.' . $lang . '.php');

	function lang($key, $text_only = false, $alternative_language = null) {
		global $language;

		$_language = $alternative_language ? $alternative_language : $language;

		if( isset($_language[$key]) && $_language[$key] !== null) {

			$value = $_language[$key];

			if( isset($_GET['debug']) && !is_array($value) ) {
				echo $text_only ? $key : "<span class=\"label label-warning\">$key</span>";
			} else {
				if( is_array($value) ) {
					return $value;
				} else {
					echo $value;
				}
			}
		} else {
			echo $text_only ? "MISSING TRANSLATION $key" : "<span class=\"label label-danger\">MISSING TRANSLATION $key</span>";
		}
	}

	function renderWithCache($template, $layout) {
	    $cache = PATH_CACHE . "{$template}_{$layout}.html";
	    if (!file_exists($cache)) {
	        $output = render($template, $layout);
	        file_put_contents($cache, $output);
	        return $output;
	    } else {
	        include($cache);
	    }
	}

	function render($template, $layout) {

		global $lang;
		
		ob_start();
		include PATH_TEMPLATES . '_.view.' . $template. '.php';
		$template = ob_get_clean();;

		ob_start();
		include PATH_TEMPLATES . '_.layout.' . $layout. '.php';
		$layout = ob_get_clean();;
		return str_replace('{yield}', $template , $layout);
	}

?>