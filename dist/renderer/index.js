"use strict";
const statuses = $("*[status]").elements;
const names = $("*[username]").elements;
setInterval(() => {
    statuses.forEach(status => {
        status.innerHTML = status.innerHTML.replace(/(.{15})..+/, "$1…");
    });
    names.forEach(name => {
        name.innerHTML = name.innerHTML.replace(/(.{8})..+/, "$1…");
    });
}, 500);
