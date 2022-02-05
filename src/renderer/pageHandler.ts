const otherForms = document.querySelectorAll("[form]");

otherForms.forEach((element: HTMLElement | any) => {
    element.style.display = "none";
});
t("[news-page]").css("display", "block");

function openOrDisableForm(query: string): void {
    console.log(t.$(query));
    if (t.$(query).style.display === "none" || t.$(query).style.display === null) {
        otherForms.forEach((element: HTMLElement | any) => {
            element.style.display = "none";
        });

        t(query).css("display", "block");
    } else {
        t(query).css("display", "none");
        t("*[newsPage]").css("display", "block");
    }
}
