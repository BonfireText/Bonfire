const statuses = $("*[status]").elements as NodeListOf<Element>;
const names = $("*[username]").elements as NodeListOf<Element>;

setInterval(() => {
    statuses.forEach(status => {
        status.innerHTML = status.innerHTML.replace(/(.{15})..+/, "$1…");
    });

    names.forEach(name => {
        name.innerHTML = name.innerHTML.replace(/(.{8})..+/, "$1…");
    });
}, 500);
