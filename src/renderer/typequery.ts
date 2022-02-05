interface Array<T> {
    move(from: number, to: number): void;
    getObject(objectKey: string | number, searchValue: string | number, includes?: boolean): void;
    remove(index: number): void;
}

Array.prototype.move = function (from: any, to: any) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

Array.prototype.getObject = function (objectKey: any, searchValue: any, includes?: boolean) {
    if (includes) {
        return this.find(x => x[objectKey].includes(searchValue));
    } else {
        return this.find(x => x[objectKey] === searchValue);
    }
};

Array.prototype.remove = function (index: number) {
    this.splice(index, 1);
};

class ElementCollection {
    elements: any;
    element: Element;

    on = (event: string, cbOrQuery: string | any, cb?: any) => {
        if (typeof cbOrQuery === "function") {
            this.elements.forEach((element: any) => {
                element.addEventListener(event, cbOrQuery);
            });
        } else {
            this.elements.forEach((element: any) => {
                element.addEventListener(event, (e: any) => {
                    if (e.target.matches(cbOrQuery)) cb(e);
                });
            });
        }

        return this;
    };

    text = (text: string) => {
        this.elements.forEach((e: any) => (e.innerText = text));
        return this;
    };

    css = (style: string, value: string | number) => {
        const prop = style.replace(/(-[a-z])/, g => {
            return g.replace("-", "").toUpperCase();
        });

        this.elements.forEach((e: any) => (e.style[prop] = value));
        return this;
    };

    next = () => {
        return this.elements.map((e: HTMLElement) => e.nextSibling).filter((e: any) => e != null);
    };

    prev = () => {
        return this.elements.map((e: HTMLElement) => e.previousSibling).filter((e: any) => e != null);
    };

    removeClass = (name: string) => {
        this.elements.forEach((element: HTMLElement) => {
            element.classList.remove(name);
        });
        return this;
    };

    addClass = (name: string) => {
        this.elements.forEach((element: HTMLElement) => {
            element.classList.add(name);
        });
        return this;
    };

    toggleClass = (name: string, toggle: boolean) => {
        this.elements.forEach((element: HTMLElement) => {
            element.classList.toggle(name, toggle);
        });
        return this;
    };

    addElement = (element: HTMLElement) => {
        this.elements.forEach((el: HTMLElement) => {
            el.append(element);
        });

        return this;
    };

    insertAfter = (newNode: Node, referenceNode: HTMLElement) => {
        referenceNode.parentNode?.insertBefore(newNode, referenceNode.nextSibling);
    };

    insertBefore = (newNode: Node, referenceNode: HTMLElement) => {
        referenceNode.parentNode?.insertBefore(newNode, referenceNode.previousSibling);
    };

    constructor(elements: NodeListOf<Element>) {
        this.elements = elements;
        this.element = elements[0];
    }
}

function t(query: string) {
    return new ElementCollection(document.querySelectorAll(query));
}

t.getJSON = async (url: string) => {
    await fetch(url, {
        method: "GET",
    }).then();
};

t.$ = (selector: string) => {
    return document.querySelector(selector) as HTMLElement;
};

t.$all = (selector: string) => {
    return document.querySelectorAll(selector);
};
