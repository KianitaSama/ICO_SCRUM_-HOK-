var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Kiana', function(req, res, next) {
  res.render('Kiana', { title: 'Express' });
});
router.get('/Oswaldo', function(req, res, next) {
  res.render('Oswaldo', { title: 'Express' });
});
router.get('/Hagen', function(req, res, next) {
  res.render('Hagen', { title: 'Express' });
});
router.get('/A1-0', function(req, res, next) {
  res.render('A1-0', { title: 'Express' });
});
router.get('/A1-1', function(req, res, next) {
  res.render('A1-1', { title: 'Express' });
});
router.get('/A1-2', function(req, res, next) {
  res.render('A1-2', { title: 'Express' });
});
router.get('/A2-0', function(req, res, next) {
  res.render('A2-0', { title: 'Express' });
});
router.get('/A2-1', function(req, res, next) {
  res.render('A2-1', { title: 'Express' });
});
router.get('/A2-2', function(req, res, next) {
  res.render('A2-2', { title: 'Express' });
});
router.get('/A3-0', function(req, res, next) {
  res.render('A3-0', { title: 'Express' });
});
router.get('/A3-1', function(req, res, next) {
  res.render('A3-1', { title: 'Express' });
});
router.get('/A3-2', function(req, res, next) {
  res.render('A3-2', { title: 'Express' });
});
router.get('/A3-3', function(req, res, next) {
  res.render('A3-3', { title: 'Express' });
});
module.exports = router;
