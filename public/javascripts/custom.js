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

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

//--- cards -------------------------------------
$('.card-primary,.card-success,.card-info,.card-danger,.card-warning').addClass('card-colored');

var types = {
    array: {href: "/types#Array & List"}
    ,boolean: {href: "/types#Boolean"}
    ,float: {href: "/types#Float"}
    ,int: {href: "/types#Integer"}
    ,integer: {href: "/types#Integer"}
    ,string: {href: "/types#String"}
    ,vector: {href: "/types#Vector"}

    ,duration: {href: "/types#Duration"}
};
var modules = {
    'extents': {
     href: "/modules/extents"
    }, 'boolean': {
     href: "/types#Boolean"
    }
};
$('mark,code').each(function (item) {
    var e = $(this);
    var text = e.text();
    // Terminate as this is most likely a block of code, rather than just a type name.
    if (text.length > 64) {
        return;
    }
    var classToAdd = 'data-type';
    var foundType = types[text.trim().toLowerCase()];
    if (!foundType) {
        foundType = modules[text.trim().toLowerCase()];
        classToAdd = 'module-type';
    }
    if (foundType) {
        e.text(""); // Remove original text
        var anchor = document.createElement("a");
        anchor.href = foundType.href;
        anchor.innerHTML = text; // add original text in the anchor tag
        e.addClass(classToAdd);
        e.append(anchor);
    }
});
$(function(){
    $('pre code').each(function() {
        var lines = $(this).text().split('\s').length - 1;
        var $numbering = $('<ul/>').addClass('pre-numbering');
        $(this)
            .addClass('has-numbering')
            .parent()
            .append($numbering);
        for(i=1;i<=lines;i++){
            $numbering.append($('<li/>').text(i));
        }
    });
});
