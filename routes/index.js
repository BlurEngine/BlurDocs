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

function handle404(res, err, html, next) {
    if (err) {
        console.log(err);
        console.log(Object.keys(err));
        if(err['path']) { // Rendering error
            next(err);
        } else {          // 404
            next();
        }
    } else {
        res.send(html);
    }
}

/* insert routes here. */
router.use(/\/modules(\/.*)?/i, function(req, res, next) {
    if (req.params[0] === undefined) req.params[0] = "";
    var path = 'modules' + req.params[0];
    res.render(path, {md:md, path: "/" + path.replace(/\/+$/, "")}, (err, html) => handle404(res, err, html, next));
});
router.use(/\/guides(\/.*)?/i, function(req, res, next) {
    if (req.params[0] === undefined) req.params[0] = "";
    var path = 'guides' + req.params[0];
    res.render(path, {md:md, path: "/" + path.replace(/\/+$/, "")}, (err, html) => handle404(res, err, html, next));
});
router.use(/\/examples(\/.*)?/i, function(req, res, next) {
    if (req.params[0] === undefined) req.params[0] = "";
    var path = 'examples' + req.params[0];
    res.render(path, {md:md, path: "/" + path.replace(/\/+$/, "")}, (err, html) => handle404(res, err, html, next));
});
router.use('/types', function(req, res, next) {
    res.render('types', {md:md, path: '/types'});
});
router.use(/^\/$/, function(req, res, next) {
    res.render('index', {md:md, path: '/'});
});

// catch 404 and forward to error handler
router.use(function(req, res, next) {
    res.render('404', {req: req});
});

module.exports = router;
