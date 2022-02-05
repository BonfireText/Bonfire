"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statuses = t("*[status]").elements;
var names = t("*[username]").elements;
var userList = t("*[user-list]").element;
var userTemplate = t("*[user-template]").element;
var users = [];
var user = {
    id: Date.now().toLocaleString(),
    username: "Example",
    tag: "Example#1234",
    email: "example@example.com",
    avatar: "https://i.imgur.com/bKyYbyS.jpg",
    bio: "https://cdn.wallpapersafari.com/98/30/BeTDXk.jpg",
    banner: "bannerImg",
    password: "string",
    status: "Custom Status",
    guilds: null,
    friends: null,
    apps: null,
};
users.push(user);
users.push(user);
setInterval(function () {
    statuses.forEach(function (status) {
        status.innerHTML = status.innerHTML.replace(/(.{15})..+/, "$1…");
    });
    names.forEach(function (name) {
        name.innerHTML = name.innerHTML.replace(/(.{8})..+/, "$1…");
    });
}, 200);
users === null || users === void 0 ? void 0 : users.forEach(function (user) {
    appendUser(user);
});
function appendUser(user) {
    var card = userTemplate.content.cloneNode(true).children[0];
    var image = card.querySelector("*[avatar]");
    var username = card.querySelector("*[username]");
    var status = card.querySelector("*[status]");
    image.src = user.avatar;
    username.innerText = user.username;
    status.innerText = user.status;
    userList.append(card);
}
