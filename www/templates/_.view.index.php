<section class="about">
	<h2 class="text-center"><?php lang('about_title'); ?></h2>
	<p class="text-center lead"><?php lang('about_subtitle'); ?></p>
</section>

<section class="projects">
	<div id="projects-slider" class="projects-slider">
		<ul class="slidee">
			<?php foreach( lang('work_projects') as $project ) { ?>
				<li>
					<a href="#project-<?php lang('project_id', true, $project); ?>" class="fancybox-trigger">
						<img src="<?php lang('project_image_thumbnail', true, $project, true); ?>" 
							title="<?php lang('project_image_thumbnail', true, $project); ?>"></a>
					<a href="" class="ov-open">&#160;</a>
					<div class="overlay">
						<a href="" class="ov-close">&#160;</a>
						<div class="ov-wrapper">
							<div class="ov-inner text-center">
								<p class="title"><?php lang('work_client'); ?></p>
								<p><a href="<?php lang('project_client_website', true, $project); ?>" target="_blank"><?php lang('project_client_name', false, $project); ?></a></p>
								<p class="title"><?php lang('work_location'); ?></p>
								<p><?php lang('project_location', false, $project); ?></p>
								<p class="title"><?php lang('work_projects'); ?></p>
								<p><?php lang('project_projects', false, $project); ?></p>
								<p class="title"><?php lang('work_services'); ?></p>
								<p><?php lang('project_services', false, $project); ?></p>
								<p class="title"><?php lang('work_result'); ?></p>
								<p><?php lang('project_result', false, $project); ?></p>
							</div>
						</div>
					</div>
				</li>
			<?php } ?>
		</ul>
		<a href="#" id="prev-project" class="nav prev-slide no-border"></a>
		<a href="#" id="next-project" class="nav next-slide no-border"></a>
	</div>

	<?php foreach( lang('work_projects') as $project ) { ?>
		<div id="project-<?php lang('project_id', true, $project); ?>" class="fancybox-dc-inner">
			<img class="fancybox-dc-image" 
				src="<?php lang('project_image_original', true, $project, true); ?>" 
				title="<?php lang('project_image_original', true, $project); ?>" />
		</div>
	<?php } ?>
</section>

<section class="customers">
	<h2 class="text-center"><?php lang('customer_title') ?></h2>
	<p class="lead text-center"><?php lang('customer_subtitle') ?></p>
	<div class="container">
		<div class="row">
			<div class="col-sm-4">
				<h3 class="quote-sign">&ldquo;</h3>
				<p><a href="<?php lang('customer_1_company_link', true) ?>" target="_blank"><?php lang('customer_1_company_name') ?></a></p>
				<p><?php lang('customer_1_feedback') ?></p>
				<p><?php lang('customer_1_person_name') ?><br/><?php lang('customer_1_person_title') ?></p>
			</div>
			<div class="col-sm-4">
				<h3 class="quote-sign">&ldquo;</h3>
				<p><a href="<?php lang('customer_2_company_link', true) ?>" target="_blank"><?php lang('customer_2_company_name') ?></a></p>
				<p><?php lang('customer_2_feedback') ?></p>
				<p><?php lang('customer_2_person_name') ?><br/><?php lang('customer_2_person_title') ?></p>
			</div>
			<div class="col-sm-4">
				<h3 class="quote-sign">&ldquo;</h3>
				<p><a href="<?php lang('customer_3_company_link', true) ?>" target="_blank"><?php lang('customer_3_company_name') ?></a></p>
				<p><?php lang('customer_3_feedback') ?></p>
				<p><?php lang('customer_3_person_name') ?><br/><?php lang('customer_3_person_title') ?></p>
			</div>
		</div>
	</div>
</section>

<section class="contact">
	<h2 class="text-center"><?php lang('contact_title') ?></h2>
	<p class="text-center lead"><?php lang('contact_subtitle') ?></p>
	<form method="post" action="https://formspree.io/<?php lang('contact_form_recipient', true) ?>">
		<input type="text" name="_gotcha" style="display:none" />
		<div class="container">
			<div class="row">
				<div class="col-sm-4">
				<!-- <div class="col-sm-offset-1 col-sm-4 col-md-offset-2 col-md-3 col-lg-offset-3 col-lg-2"> -->
					<div class="form-group">
						<label for="name"><?php lang('contact_form_name') ?></label>
						<input class="form-control" type="text" name="name" id="name" />
					</div>
					<div class="form-group">
						<label for="email"><?php lang('contact_form_email') ?></label>
						<input class="form-control" type="text" name="email" id="email" />
					</div>
				</div>
				<div class="col-sm-4">
				<!-- <div class="col-sm-6 col-md-5 col-lg-4"> -->
					<div class="form-group">
						<label for="message"><?php lang('contact_form_message') ?></label>
						<textarea class="form-control" id="message" name="message" rows="5" placeholder="<?php lang('contact_form_message_placeholder', true) ?>"></textarea>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="form-group send-button-special">
						<input class="btn btn-default" type="submit" value="<?php lang('contact_form_send', true) ?>" />
					</div>
				</div>
			</div>
		</div>
	</form>
</section>

<section class="team">
	<h2 class="text-center"><?php lang('team_title') ?></h2>
	<p class="text-center lead"><?php lang('team_subtitle') ?></p>
	<div class="container">
		<div class="row">
			<div class="col-sm-6 text-center">
				<img src="<?php lang('team_1_picture', true, null, true) ?>" title="<?php lang('team_1_picture', true) ?>" />
				<h3><a href="<?php lang('team_1_link') ?>"><?php lang('team_1_name') ?></a></h3>
				<p class="lead"><?php lang('team_1_title') ?></p>
				<p class="lead"><?php lang('team_1_phone') ?></p>
			</div>
			<div class="col-sm-6 text-center">
				<img src="<?php lang('team_2_picture', true, null, true) ?>" title="<?php lang('team_2_picture', true) ?>" />
				<h3><a href="<?php lang('team_2_link') ?>"><?php lang('team_2_name') ?></a></h3>
				<p class="lead"><?php lang('team_2_title') ?></p>
				<p class="lead"><?php lang('team_2_phone') ?></p>
			</div>
		</div>
	</div>
</section>