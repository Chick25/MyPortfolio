<h2 class="entry-title"><?php echo esc_html(get_theme_mod('creative_portfolio_lite_no_results_page_title',__('Nothing Found','creative-portfolio-lite')));?></h2>

<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>
	<p><?php printf( esc_html__( 'Ready to publish your first post? Get started here.', 'creative-portfolio-lite' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
	<?php elseif ( is_search() ) : ?>
	<p><?php echo esc_html(get_theme_mod('creative_portfolio_lite_no_results_page_content',__('Sorry, but nothing matched your search terms. Please try again with some different keywords.','creative-portfolio-lite')));?></p><br />
		<?php get_search_form(); ?>
	<?php else : ?>
	<p><?php esc_html_e( 'Dont worry&hellip it happens to the best of us.', 'creative-portfolio-lite' ); ?></p><br />
	<div class="more-btn">
		<a href="<?php echo esc_url(home_url() ); ?>"><?php esc_html_e( 'Back to Home Page', 'creative-portfolio-lite' ); ?><span class="screen-reader-text"><?php esc_html_e( 'Back to Home Page','creative-portfolio-lite' );?></span></a>
	</div>
<?php endif; ?>