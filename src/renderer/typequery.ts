class Elements {
    elements: any;
    element: any;

    text = (text: string) => {
        this.elements.forEach((element: HTMLElement) => {
            element.innerText = text;
        });

        return this;
    };

    getJSON = async (url: string) => {
        const fetched = await fetch(url, {
            method: "get",
        });

        const data = await fetched.json();
        return data;
    };

    css = (property: any, value: any) => {
        this.elements.forEach((element: HTMLElement) => {
            const camelProp = property.replace(/(-[a-z])/, (g: string) => {
                return g.replace("-", "").toUpperCase();
            });

            element.style[camelProp] = value;
        });

        return this;
    };

    constructor(parameter: string | null) {
        this.elements = document.querySelectorAll(parameter ?? "") as NodeListOf<Element>;
        this.element = document.querySelector(parameter ?? "");
    }
}

function $(parameter: string | null) {
    return new Elements(parameter);
}
