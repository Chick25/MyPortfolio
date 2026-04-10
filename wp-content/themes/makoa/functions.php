<?php

function makoa_fse_styles() {
    wp_enqueue_style(
        'fse-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get( 'Version' )
    );
}

add_action( 'wp_enqueue_scripts', 'makoa_fse_styles' );


if ( ! function_exists( 'makoa_fse_setup' ) ) {
    function makoa_fse_setup() {
        add_theme_support( 'wp-block-styles' );
        add_editor_style( 'style.css' );
    }
}

add_action( 'after_setup_theme', 'makoa_fse_setup' );

remove_theme_support( 'core-block-patterns' );

add_filter( 'should_load_remote_block_patterns', '__return_false' );

function makoa_register_pattern_categories() {
    if ( function_exists( 'register_block_pattern_category' ) ) {
        register_block_pattern_category(
            'makoa',
            array(
                'label' => __( 'Makoa', 'makoa' ),
                'description' => __( 'Makoa patterns', 'makoa' ),
            )
        );
    }
}

add_action( 'init', 'makoa_register_pattern_categories' );

function makoa_setup_notice() {
    $notice_option_name = 'makoa_setup_notice_dismissed';
    $is_dismissed = get_option( $notice_option_name );

    if ( ! $is_dismissed ) {
    $image_url = '/wp-content/themes/makoa/assets/images/me.jpg';
    $notice_text = '<img src="' . esc_url( $image_url ) . '" style="max-width: 100%;" />
    <div class="makoa-notice-text" style="margin-top: 15px;">
        <h3 style="margin-top: 0px; font-size: 18px;">' . __('Hi, I\'m Roman Fink, the creator of the Makoa theme!','makoa') . ' 😊</h3>
        <p><b>🌟 ' . __('Upgrade to Makoa PRO:','makoa') . '</b></p>
        <p style="margin-bottom: 10px">' . __('Unlock 48 stunning design patterns, 8 custom color styles, and exclusive premium features to elevate your website.','makoa') . '</p>
        <p style="margin-bottom: 20px">
            <a href="https://demo.romanfink.com/makoa/?utm_source=makoa-theme" style="display: inline-block; background-color: #111; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">' . __('Discover Makoa PRO','makoa') . '</a>
        </p>
        <p>☕ ' . __('Support My Work:','makoa') . ' <a href="https://ko-fi.com/romanfink">https://ko-fi.com/romanfink</a></p>
        <p>💌 ' . __('Need Help? Email me at:','makoa') . ' <i>hello@romanfink.com</i></p>
        <p>🌐 ' . __('Visit My Website:','makoa') . ' <a href="https://romanfink.com">https://romanfink.com</a></p>
        <p>𝕏 ' . __('Follow Me on X:','makoa') . ' <a href="https://x.com/romanfinkwp">@romanfinkwp</a></p>
        <p style="margin: 5px 0 0;"><b>' . __('Just CLOSE this notice to hide it forever. Thanks for your support!','makoa') . ' 🚀</b></p>
    </div>';
    echo '<div id="makoa-notice" class="notice notice-info is-dismissible">' . wp_kses_post( $notice_text ) . '</div>';
}

}

add_action( 'admin_notices', 'makoa_setup_notice' );


function makoa_notice_script() {
    if ( ! wp_script_is( 'jquery', 'done' ) ) {
        wp_enqueue_script( 'jquery' );
    }
    wp_enqueue_script( 'makoa-notice-script', get_template_directory_uri() . '/assets/js/admin-notice.js', array( 'jquery' ), '', true );
}

add_action( 'admin_enqueue_scripts', 'makoa_notice_script' );


function makoa_enqueue_custom_admin_styles() {
    $notice_option_name = 'makoa_setup_notice_dismissed';
    $is_dismissed = get_option( $notice_option_name );
    if ( ! $is_dismissed ) {
        wp_enqueue_style( 'makoa-admin-notice', get_template_directory_uri() . '/assets/css/admin-notice.css' );
    }
}

add_action( 'admin_enqueue_scripts', 'makoa_enqueue_custom_admin_styles' );


function makoa_dismiss_notice() {
    update_option( 'makoa_setup_notice_dismissed', true );
    wp_die();
}

add_action( 'wp_ajax_makoa_dismiss_notice', 'makoa_dismiss_notice' );


// --- Makoa About Page ---

function makoa_add_about_page() {
	add_theme_page(
		__( 'About Makoa', 'makoa' ),
		__( 'About Makoa', 'makoa' ),
		'edit_theme_options',
		'makoa-about',
		'makoa_about_page_html'
	);
}
add_action( 'admin_menu', 'makoa_add_about_page' );

function makoa_about_page_styles( $hook ) {
	if ( 'appearance_page_makoa-about' !== $hook ) {
		return;
	}
	wp_enqueue_style( 'makoa-about-page', get_template_directory_uri() . '/assets/css/admin-about.css', array(), wp_get_theme()->get( 'Version' ) );
}
add_action( 'admin_enqueue_scripts', 'makoa_about_page_styles' );

function makoa_about_page_html() {
	$theme   = wp_get_theme();
	$version = $theme->get( 'Version' );
	$image   = get_template_directory_uri() . '/assets/images/me.jpg';
	?>
	<div class="wrap makoa-about-wrap">
		<h1><?php esc_html_e( 'Makoa Theme', 'makoa' ); ?> <span class="makoa-version"><?php echo esc_html( $version ); ?></span></h1>

		<div class="makoa-about-columns">
			<div class="makoa-about-card makoa-about-author">
				<img src="<?php echo esc_url( $image ); ?>" alt="Roman Fink" class="makoa-author-photo" />
				<h2><?php esc_html_e( 'Hi, I\'m Roman Fink', 'makoa' ); ?></h2>
				<p><?php esc_html_e( 'The creator of the Makoa theme! With alpaca\'s help, of course.', 'makoa' ); ?> 😊</p>
				<ul class="makoa-about-links">
					<li>🌐 <a href="https://romanfink.com" target="_blank"><?php esc_html_e( 'Website', 'makoa' ); ?></a></li>
					<li>𝕏 <a href="https://x.com/romanfinkwp" target="_blank">@romanfinkwp</a></li>
				</ul>
			</div>

			<div class="makoa-about-card makoa-about-pro">
				<h2>🌟 <?php esc_html_e( 'Upgrade to Makoa PRO', 'makoa' ); ?></h2>
				<p><?php esc_html_e( 'Unlock 48 stunning design patterns, 8 custom color styles, and exclusive premium features to elevate your website.', 'makoa' ); ?></p>
				<a href="https://demo.romanfink.com/makoa/?utm_source=makoa-theme-about" class="makoa-about-btn" target="_blank">
					<?php esc_html_e( 'Discover Makoa PRO', 'makoa' ); ?>
				</a>
			</div>

			<div class="makoa-about-card makoa-about-help">
				<h2>💌 <?php esc_html_e( 'Need Help?', 'makoa' ); ?></h2>
				<p><?php esc_html_e( 'Having trouble setting up the theme or need help with your website? Feel free to reach out — I\'m happy to help!', 'makoa' ); ?></p>
				<p><?php esc_html_e( 'Email me at:', 'makoa' ); ?> <a href="mailto:hello@romanfink.com"><strong>hello@romanfink.com</strong></a></p>
			</div>

			<div class="makoa-about-card makoa-about-support">
				<h2>☕ <?php esc_html_e( 'Support My Work', 'makoa' ); ?></h2>
				<p><?php esc_html_e( 'If you enjoy the Makoa theme and want to support its development, consider buying me a coffee. Every bit is appreciated!', 'makoa' ); ?></p>
				<a href="https://ko-fi.com/romanfink" class="makoa-about-btn makoa-about-btn-outline" target="_blank">
					<?php esc_html_e( 'Buy Me a Coffee', 'makoa' ); ?>
				</a>
			</div>
		</div>
	</div>
	<?php
}