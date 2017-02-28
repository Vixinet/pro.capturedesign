<!doctype html>
<!--[if lt IE 7]>			<html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>				 <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>				 <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="<?php lang('meta_description', true); ?>">

        <meta property="og:type" content="website">
        <meta property="og:url" content="http://www.capturedesign.pro">
        <meta property="og:locale" content="<?php lang('meta_facebook_local', true); ?>">
        <meta property="og:title" content="<?php lang('meta_facebook_title', true); ?>">
		<meta property="og:description" content="<?php lang('meta_facebook_text', true); ?>">
        <meta property="og:image" content="<?php lang('meta_facebook_image', true); ?>">
        

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:url" content="http://www.capturedesign.pro">
        <meta name="twitter:title" content="<?php lang('meta_twiter_title', true); ?>">
        <meta name="twitter:description" content="<?php lang('meta_twiter_text', true); ?>">
        <meta name="twitter:image:src" content="<?php lang('meta_twiter_image', true); ?>">

		<title><?php lang('meta_title', true); ?></title>

        <link rel="apple-touch-icon" href="img/apple-touch-icon.png">
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<link rel="stylesheet" href="css/font-awesome.min.css">
		<?php if( $lang !== 'ru' ) { ?>
		<link rel="stylesheet" href="css/font-museo-latin.css">
		<?php } else { ?>
		<link rel="stylesheet" href="css/font-museo-cyrillic.css">
		<?php } ?>
		<link rel="stylesheet" href="css/font-raleway.css">
		<link rel="stylesheet" href="css/fancybox.css">
		<link rel="stylesheet" href="css/main.css">
		<link rel="stylesheet" href="css/main-slider.css">
		<script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
	</head>
	<body>
		<!--[if lt IE 8]>
			<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<header>
			<div class="splash">
				<div class="text-center inner">
					<h1><?php lang('splash_title'); ?></h1>
					<p class=" lead"><?php lang('splash_subtitle'); ?></p>
				</div>
			</div>
		</header>

		<nav class="navbar navbar-default " role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand no-border" href="#">
						<img src="img/logo.png" />
					</a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<ul class="nav navbar-nav navbar-right">
						<li><a href="http://blog.capturedesign.pro"><?php lang('navigation_blog'); ?></a></li>
						<li class="hidden-xs"><a href="https://www.facebook.com/capturedesignoy/" target="_blank"><img src="img/ico-facebook.png" /></a></li>
						<li class="hidden-xs"><a href="https://www.linkedin.com/company/capture-design-oy" target="_blank"><img src="img/ico-linkedin.png" /></a></li>
						<li class="hidden-xs"><a href="https://www.instagram.com/capturedesignoy/" target="_blank"><img src="img/ico-instagram.png" /></a></li>
						<li class="lang"><a href="language.php?lang=en"><?php lang('navigation_lang_en'); ?></a></li>
						<li><a href="language.php?lang=fi"><?php lang('navigation_lang_fi'); ?></a></li>
						<li><a href="language.php?lang=ru"><?php lang('navigation_lang_ru'); ?></a></li>
					</ul>
				</div>
			</div>
		</nav>

		<main>
			{yield}
		</main>

		<footer class="container-fluid">
			<section>
				<h2 class="text-center"><?php lang('footer_follow_us'); ?></h2>
				<div class="wp-posts text-center">
					<img class="loader" src="img/loader.gif" />
				</div>
				<div class="container">
					<div class="row">
						<hr />
						<div class="col-sm-4 text-center">
							<p><?php lang('footer_copyright'); ?></p>
						</div>
						<div class="col-sm-4 text-center copyright">
							<p><?php lang('footer_business_id'); ?></p>
						</div>
						<div class="col-sm-4 text-center">
							<p>Made with <span class="heart" style="color:#F52323">&#10084;</span> in Finland by <a href="https://fi.linkedin.com/in/daniel-costa-b4310570" target="_blank">Daniel Costa</a></p>
						</div>
					</div>
				</div>
			</section>
		</footer>

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
		<script src="js/vendor/jquery.easing.min.1.3.js"></script>
		<script src="js/vendor/bootstrap.min.js"></script>
		<script src="js/vendor/sly.min.js"></script>
		<script src="js/vendor/fancybox.js"></script>
		<script src="js/main.js"></script>
		<script>
				(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
				function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
				e=o.createElement(i);r=o.getElementsByTagName(i)[0];
				e.src='http://www.google-analytics.com/analytics.js';
				r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
				ga('create','UA-69755309-1','auto');ga('send','pageview');
		</script>

	</body>
</html>
	