export enum Attribute {
    "name" = "name",
    "email" = "email",
    "city" = "city",
    "nameCompany" = "nameCompany",
}

class MyProfile extends HTMLElement {
    name?: string;
    email?: string;
    city?: string;
    nameCompany?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
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
    
    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) { 
            switch (propName) {
                default:
                this[propName] = newValue;
                break;}
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