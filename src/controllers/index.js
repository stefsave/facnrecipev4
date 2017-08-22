// //Routes
// homeroute '/'
// askforloginpage '/select'
// login '/loging' (post)
// signup 'signup' (post)
// cusines '/:cusines' [arabic, italian, asian, mixed]
// recipe '/:cusine/:id'
// addform '/addrecipe' (post)

const express = require('express');
const path = require('path');
const router = express.Router();




router.get('/', (req, res) => res.send('home'));
router.get('/login', (req, res) => res.send('login'))
router.get('/signup', (req, res) => res.send('signup'));
router.get('/addrecipe', (req, res) => res.send('addrecipe'));
router.get('/:cusines', (req, res) => res.send(`${res.params.cusines}`));
router.get('/:cusine/:id', (req, res) => res.send(`${res.params.id}`));



module.exports = router;