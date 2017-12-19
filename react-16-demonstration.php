<?php

/*
Plugin Name: React 16 Demonstration
Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates
Description: A brief description of the Plugin.
Version: 1.0
Author: alexander
Author URI: http://URI_Of_The_Plugin_Author
License: A "Slug" license name e.g. GPL2
*/

define( "R16_HOST", "http://localhost:8080" );

function get_lyrics() {
	/** These are the lyrics to Hello Dolly */
	$lyrics = "The chase is better than the catch
Transforming the tunes
We need your support!
If you've got the breath back
It's the first page of the second chapter
I want you back for the rhythm attack
Coming down on the floor like a maniac
I want you back for the rhythm-attack
Get down in full effect!
I want you back for the rhythm attack
Coming down on the floor like a maniac
I want you back, so clean up the dish
By the way, how much is the fish?
How much is the fish?
Here we go, here we go
Here we go again
Yeah!
Sunshine in the air!
We're breaking the rules
Ignore the machine
You won't ever stop this
The chase is better than the catch!
I want you back for the rhythm attack
Coming down on the floor like a maniac
I want you back for the rhythm attack
Get down in full effect!
I want you back for the rhythm attack
Coming down on the floor like a maniac
I want you back, so clean up the dish
By the way, how much is the fish?
How much is the fish?
Sunshine in the air!
Come on! Na, na, na, na, na, na, na, na, na
Everybody! Na, na, na, na, na, na, na, na, na
Come on!
Together!
Yeah! Yeah!
How much is the fish?
How much is the fish?
Yeah!
Come on, come on
Argh!
Resurrection!
Respect tot Bob in the ice cream van!";

	// Here we split it into lines
	$lyrics = explode( "\n", $lyrics );

	return $lyrics;
}

function r16_dashboard_widget_function() {
	echo '<div id="react-16-app-loader"></div>';
	echo '<div id="react-16-app"></div>';
}

function r16_lyric_portal() {
	echo '<p id="r16_portal"></p>';
}

function r16_register_scripts() {
	wp_register_script( 'r16-app-loader-script', R16_HOST . '/js/dist/main.js', array(), false, true );
	wp_register_script( 'r16-vendor', R16_HOST .'/js/dist/vendor.js' );
	wp_register_style( 'r16-dashboard-style', plugin_dir_path( __FILE__ ) . '/css/r16-dashboard.css' );
}

function r16_add_dashboard_widgets() {
	wp_add_dashboard_widget(
		'example_dashboard_widget',         // Widget slug.
		'Hello Scooter',         // Title.
		'r16_dashboard_widget_function' // Display function.
	);
	add_action( 'admin_notices', 'r16_lyric_portal' );
	add_action( 'admin_enqueue_scripts', 'load_dashboard_script' );
}

function load_dashboard_script() {
	wp_enqueue_script( 'r16-app-loader-script' );
	wp_enqueue_style( 'r16-dashboard-style' );
	wp_localize_script( 'r16-app-loader-script', 'r16lyrics', array(
		"lyrics" => get_lyrics()
	) );
}

add_action( 'admin_enqueue_scripts', 'r16_register_scripts' );
add_action( 'wp_dashboard_setup', 'r16_add_dashboard_widgets' );

