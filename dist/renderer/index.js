"use strict";
var statuses = $("*[status]").elements;
var names = $("*[username]").elements;
setInterval(function () {
    statuses.forEach(function (status) {
        status.innerHTML = status.innerHTML.replace(/(.{15})..+/, "$1…");
    });
    names.forEach(function (name) {
        name.innerHTML = name.innerHTML.replace(/(.{8})..+/, "$1…");
    });
}, 500);
