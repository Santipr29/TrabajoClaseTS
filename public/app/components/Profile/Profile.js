export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["email"] = "email";
    Attribute["city"] = "city";
    Attribute["nameCompany"] = "nameCompany";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            city: null,
            email: null,
            name: null,
            nameCompany: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/profile/profile.css">
                <section>
                <h2>${this.name}</h2>
                <p>${this.email}</p>
                <p>${this.city}</p>
                <p>${this.nameCompany}</p>
                </section>
                `;
        }
    }
}
customElements.define("my-profile", MyProfile);
export default MyProfile;
