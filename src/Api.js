class Api {
    constructor(t) {
        this.path = "https://api.react-learning.ru";
        this.token = t;
    }
    getProducts() {
        return fetch(`${this.path}/products`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
    }
    getProduct() {

    }
    addProduct() {

    }
    updProduct() {

    }
    delProduct() {

    }
    logIn() { // войти

    }
    signUp() { // зарегистрироваться

    }
    showProfile() {
        // return fetch(`${this.path}/v2/group-7/users/me`)
        return fetch(`${this.path}/users/me`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
    }
}


export default Api;