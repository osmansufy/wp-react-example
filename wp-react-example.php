<?php
/*
Plugin Name: WP React Example
Description: A WordPress plugin that uses React to render components.
Version: 1.0
Author: Osman Goni
*/

// Enqueue React App.
function wp_react_example_enqueue_scripts()
{
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');
    wp_enqueue_script('wp-react-example', plugin_dir_url(__FILE__) . 'build/index.js', $asset_file['dependencies'], $asset_file['version'], true);
}
add_action('admin_enqueue_scripts', 'wp_react_example_enqueue_scripts');


add_action('admin_menu',  'wp_react_example_menu');

function wp_react_example_menu()
{
    add_menu_page(
        'WP React Example',
        'WP React Example',
        'manage_options',
        'wp-react-example',
        'wp_react_example_page',
        'dashicons-admin-generic',
        6
    );
}


function wp_react_example_page()
{

    echo '<div class="wrap">';
    echo '<h1>WPLMS Admin Support</h1>';
    echo '<div id="wp-react-example-root" class="wrap">';
    echo '</div>';
    echo '</div>';
}
