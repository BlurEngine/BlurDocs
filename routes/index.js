/*
 * Copyright 2016 Ali Moghnieh
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var express = require('express');
var router = express.Router();
var md = require('marked');

/* insert routes here. */
router.use('/modules*', function(req, res, next) {
    var path = 'modules' + req.params[0];
    res.render(path, {md:md, path: "/" + path.replace(/\/+$/, "")});
});
router.use('/guides*', function(req, res, next) {
    var path = 'guides' + req.params[0];
    res.render(path, {md:md, path: "/" + path.replace(/\/+$/, "")});
});
router.use('/examples*', function(req, res, next) {
    var path = 'examples' + req.params[0];
    res.render(path, {md:md, path: "/" + path.replace(/\/+$/, "")});
});
router.use('/types', function(req, res, next) {
    res.render('types', {md:md, path: '/types'});
});
router.use('/', function(req, res, next) {
    res.render('index', {md:md, path: '/'});
});

module.exports = router;
