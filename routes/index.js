const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => res.render('home', { title: 'Home' }));

// About Me page
router.get('/about', (req, res) => res.render('about', { title: 'About Me' }));

// Projects page
router.get('/projects', (req, res) => res.render('projects', { title: 'Projects' }));

// Contact Me page
router.get('/contact', (req, res) => res.render('contact', { title: 'Contact Me' }));

module.exports = router;
