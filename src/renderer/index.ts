import * as Types from "./Interfaces";

const statuses = t("*[status]").elements as NodeListOf<Element>;
const names = t("*[username]").elements as NodeListOf<Element>;
const userList = t("*[user-list]").element as HTMLElement;
const userTemplate = t("*[user-template]").element as any;

let users: Types.User[] = [];

let user: Types.User = {
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

setInterval(() => {
    statuses.forEach(status => {
        status.innerHTML = status.innerHTML.replace(/(.{15})..+/, "$1…");
    });

    names.forEach(name => {
        name.innerHTML = name.innerHTML.replace(/(.{8})..+/, "$1…");
    });
}, 200);

users?.forEach((user: Types.User) => {
    appendUser(user);
});

function appendUser(user: Types.User) {
    const card = userTemplate.content.cloneNode(true).children[0];

    const image = card.querySelector("*[avatar]") as HTMLImageElement;
    const username = card.querySelector("*[username]") as HTMLElement;
    const status = card.querySelector("*[status]") as HTMLElement;

    image.src = user.avatar;
    username.innerText = user.username;
    status.innerText = user.status;
    userList.append(card);
}
