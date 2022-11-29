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
    getProduct(id) {
        return fetch(`${this.path}/products/${id}`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
    }
    addProduct(body) {
        return fetch(`${this.path}/products/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        })
    }
    updProduct() {

    }
    delProduct() {

    }
    logIn(body) { // войти
        return fetch(`${this.path}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
    signUp() { // зарегистрироваться

    }
    showProfile() {
        // return fetch(`${this.path}/v2/group-7/users/me`, {
        //     headers: {
        //         "Authorization": `Bearer ${this.token}`
        //     }
        // })
        return fetch(`${this.path}/users/me`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
    }
    setLike(id, flag) {
        return  fetch(`${this.path}/products/likes/${id}`, {
            method: flag ? "PUT" : "DELETE",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
    }
}


export default Api;