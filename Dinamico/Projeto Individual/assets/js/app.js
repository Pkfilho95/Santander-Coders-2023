class User {
    constructor(username, password) {
        this.username = username
        this.password = Utils.encrypt(password)
        this.isAuthenticated = false
    }
    
}

class Movie {
    constructor(image, title, director, genre, year, duration, _id) {
        this.id = _id
        this.image = image
        this.title = title.trim()
        this.director = director.trim()
        this.genre = genre
        this.year = Math.round(year)
        this.duration = Math.round(duration)
    }
}

class Utils {
    static #key = 10
    static api = "https://crudcrud.com/api/5f0edee5026342259416bdf159335413" + "/movies"

    // criptografa a senha de acordo com a key (privado)
    static encrypt(password) {
        let encryptedPassword = '';
        for (let i = 0; i < password.length; i++) {
            const char = password.charAt(i);
            const charCode = char.charCodeAt(0);
            const encryptedChar = String.fromCharCode(charCode + this.#key);
            encryptedPassword += encryptedChar;
        }
        return encryptedPassword;
    }

    // autentica o usuário (admin no caso)
    static authentication(username, password) {
        const user = arrayUsers.find(user => user.username === username)

        if (user) {
            if (user.password === this.encrypt(password)) {
                user.isAuthenticated = true
                localStorage.setItem('arrayUsers', JSON.stringify(arrayUsers))
                window.location.href = 'list.html'
                return 
            } else {
                return 'Password is incorrect.'
            }
        } else {
            return 'User not found.'
        }
    }

    // veririca se o usuário admin está autenticado
    // caso não esteja retorna ao login
    // caso esteja retorna para a lista
    static loginRequired() {
        if (window.location.pathname !== '/') {
            if (!currentUser) {
                window.location.href = '/'
            } else {
                return
            }
        } else {
            if (currentUser) {
                window.location.href = 'list.html'
                return
            }
        }
    }

    // API request
    static async request(params) {
        const method = params.method.toUpperCase()
        const data = params.data
        const id = params.id
        
        let url = Utils.api

        if (method === 'GET') {
            if (id) {
                url = `${Utils.api}/${id}`
            }
            const response = await fetch(url, {method: method})
            return await response.json()
        }

        if (method === 'POST') {
            const response = await fetch(url, {
                method: method,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            return await response.json()
        }

        if (method === 'PUT') {
            url = `${Utils.api}/${id}`
            const response = await fetch(url, {
                method: method, 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            return await response
        }

        if (method === 'DELETE') {
            url = `${Utils.api}/${id}`
            const response = await fetch(url, {method: method})
            if (response.status === 200) {
                const index = arrayMovies.indexOf(movie => movie.id === id)
                arrayMovies.splice(index, 1)
                arrayMovies.length > 0 ? localStorage.setItem('arrayMovies', JSON.stringify(arrayMovies)) : localStorage.removeItem('arrayMovies')
                location.reload()
            }
        }
    }

    // salvar na localstorage
    static saveObject() {
        localStorage.setItem('arrayMovies', JSON.stringify(arrayMovies))
    }

    // encontrar objeto na localstorage
    static findObject(key, value) {
        const obj = arrayMovies.find(movie => movie[key].toLowerCase() === value)
        return obj
    }

    // check title (primary key)
    static checkObject(title) {
        const obj = this.findObject('title', title.toLowerCase())

        if (obj) {
            return true
        } else {
            return false
        }
    }

    // create
    static createObject(data) {
        if (!this.checkObject(data.title)) {
            this.request({method: 'POST', data: data}).then((data) => {
                const obj = new Movie(...Object.values(data))
                arrayMovies.push(obj)
                this.saveObject()
                }
            )
            return {
                status: 201,
                message: 'Movie added successfully.'
            }

        } else {
            return {
                status: 400,
                message: 'Movie already exists.'
            }
        }
    }

    // read objeto específico
    static readObject(id) {
        this.request({method: 'GET', id: id})
        .then((data) => {
            modalTitle.textContent = data.title
            modalImg.src = data.image
            modalImg.alt = `Imagem do filme ${data.title}`
            modalDirector.textContent = `Director: ${data.director}`
            modalGenre.textContent = `Genre: ${data.genre}`
            modalYear.textContent = `Year: ${data.year}`
            modalDuration.textContent = `Duration: ${data.duration} minutes`
        })
        .catch(() => {
            alert('Movie not found.')
        })
    }

    // update
    static updateObject(id, data) {
        const obj = this.findObject('id', id)
        
        if (obj) {
            if (data.title.toLowerCase() !== obj.title.toLowerCase()) {
                if (this.checkObject(data.title)) {
                    return {
                        status: 400,
                        message: 'Movie already exists.'
                    }
                }
            }
            this.request({method: 'PUT', data: data, id: id}).then(() => {
                for (let key in obj) {
                    if (key !== 'id' && obj.hasOwnProperty(key)) {
                        obj[key] = data[key]
                    }
                }
                this.saveObject()
            })
            return {
                status: 200,
                message: 'Movie updated successfully.'
            }

        } else {
            return {
                status: 400,
                message: 'Movie not found.'
            }
        }
    }

    // delete
    static deleteObject(id) {
        if (confirm("Are you sure you want to delete this movie? This action is irreversible.")) {
            this.request({method: 'DELETE', id: id})
        }
    }
}

const arrayUsers = JSON.parse(localStorage.getItem('arrayUsers')) || [new User('admin','admin')]
if (!localStorage.getItem('arrayUsers')) {
    localStorage.setItem('arrayUsers', JSON.stringify(arrayUsers))
}

const currentUser = arrayUsers.find(user => user.isAuthenticated)

const arrayMovies = JSON.parse(localStorage.getItem('arrayMovies')) || []

Utils.loginRequired()

// login
if (window.location.pathname === '/') {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault()

        let isValid = true

        const data = {
            username: event.target.username,
            password: event.target.password,
        }

        data.username.classList.remove('is-invalid')
        data.password.classList.remove('is-invalid')

        if (!data.username.value) {
            data.username.classList.add('is-invalid')
            usernameError.textContent = 'Provide a username.'
            isValid = false
        }

        if (!data.password.value) {
            data.password.classList.add('is-invalid')
            passwordError.innerText = 'Provide a password.'
            isValid = false
        }

        if (isValid) {
            const alert = document.getElementById('alert')
            alert.removeChild(alert.firstChild)

            const response = Utils.authentication(data.username.value, data.password.value)

            if (response) {
                const divAlert = document.createElement('div')
                divAlert.classList = 'alert alert-danger'
                divAlert.textContent = response

                alert.appendChild(divAlert)
                loginForm.reset()
            }

        } else {
            return
        }
    })
}

// formulário de create e update
if (window.location.pathname === '/form.html') {
    
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    const id = params.get('id')

    let update = false

    if (id) {
        Utils.request({method: 'GET', id: id})
        .then((data) => {
            update = true
            formTitle.textContent = 'Update Movie'
            formBtn.firstChild.classList = 'fa fa-refresh'
            for (let key in data) {
                if (key !== '_id') {
                    document.getElementById(key).value = data[key]
                }
            }
        })
        .catch(() => {
            const alert = document.getElementById('alert')
            alert.removeChild(alert.firstChild)
            const divAlert = document.createElement('div')
            divAlert.classList = 'alert alert-danger'
            divAlert.textContent = 'Movie not found.'
            alert.appendChild(divAlert)
        })
    }

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault()

        let isValid = true

        const {
            image,
            title,
            director,
            genre,
            year,
            duration
        } = event.target
        
        const data = {
            image: image.value,
            title: title.value.trim(),
            director: director.value.trim(),
            genre: genre.value,
            year: Math.round(year.value),
            duration: Math.round(duration.value)
        }

        image.classList.remove('is-invalid')
        title.classList.remove('is-invalid')
        director.classList.remove('is-invalid')
        genre.classList.remove('is-invalid')
        year.classList.remove('is-invalid')
        duration.classList.remove('is-invalid')

        if (!data.image) {
            image.classList.add('is-invalid')
            imageError.textContent = 'Provide a image URL.'
            isValid = false
        }

        if (!data.title) {
            title.classList.add('is-invalid')
            titleError.textContent = 'Provide a title.'
            isValid = false
        }

        if (!data.director) {
            director.classList.add('is-invalid')
            directorError.textContent = 'Provide a director.'
            isValid = false
        }

        if (!data.genre) {
            genre.classList.add('is-invalid')
            genreError.textContent = 'Provide a genre.'
            isValid = false
        }

        if (!data.year) {
            year.classList.add('is-invalid')
            yearError.textContent = 'Provide a release year.'
            isValid = false
        } else {
            if (isNaN(data.year) || data.year < 1906) {
                year.classList.add('is-invalid')
                yearError.textContent = 'Provide a valid release year.'
                isValid = false
            }
        }

        if (!data.duration) {
            duration.classList.add('is-invalid')
            durationError.textContent = 'Provide a duration.'
            isValid = false
        } else {
            if (isNaN(data.duration) || data.duration <= 0) {
                duration.classList.add('is-invalid')
                durationError.textContent = 'Provide a valid duration.'
                isValid = false
            }
        }

        if (isValid) {
            const alert = document.getElementById('alert')
            alert.removeChild(alert.firstChild)
            
            const response = !update ? Utils.createObject(data) : Utils.updateObject(id, data)

            const divAlert = document.createElement('div')

            if (response.status >= 400) {
                divAlert.classList = 'alert alert-danger'
            } else {
                divAlert.classList = 'alert alert-success'
                registerForm.reset()
            }
            divAlert.textContent = response.message
            alert.appendChild(divAlert)
            
        } else {
            return
        }

    })
}

// lista de objetos
if (window.location.pathname === '/list.html') {
    const interval = setInterval(() => {
        Utils.request({method: 'GET'}).then((data) => {
            for (let movie of data) {
            const tbody = document.getElementById('tableBody')
            const row = tbody.insertRow(0)
    
            for (let key in movie) {
                if (key !== '_id' && movie.hasOwnProperty(key)) {
                    let cell = row.insertCell()
    
                    if (key === 'image') {
                        let img = document.createElement('img')
                        img.classList = 'img-fluid p-2'
                        img.src = movie[key]
                        img.alt = `Imagem do filme ${movie.title}`
                        cell.appendChild(img)
                        cell.classList = 'text-center align-middle'
                    } else {
                        cell.textContent = key !== 'duration' ? movie[key] : `${movie[key]} minutes`
                        cell.classList = 'align-middle'
                    }
                }
            }
    
            let cell = row.insertCell()
            cell.classList = 'align-middle'
    
            let readLink = document.createElement('a')
            readLink.classList = 'p-2'
            readLink.setAttribute('data-bs-toggle', 'modal')
            readLink.setAttribute('data-bs-target', '#modal')
    
            let readIcon = document.createElement('i')
            readIcon.classList = 'fa fa-eye action'
            readIcon.id = `${movie._id}`
            readLink.appendChild(readIcon)
            cell.appendChild(readLink)
    
            readIcon.addEventListener('click', event => {
                Utils.readObject(event.target.id)
            })
    
            let editLink = document.createElement('a')
            editLink.classList = 'p-2'
            editLink.href = `/form.html?id=${movie._id}`
    
            let editIcon = document.createElement('i')
            editIcon.classList = 'fa fa-pencil action'
            editLink.appendChild(editIcon)
            cell.appendChild(editLink)
    
            let deleteLink = document.createElement('a')
            deleteLink.classList = 'p-2'
    
            let deleteIcon = document.createElement('i')
            deleteIcon.id = `${movie._id}`
            deleteIcon.classList = 'fa fa-trash action'
    
            deleteLink.appendChild(deleteIcon)
            cell.appendChild(deleteLink)
    
            deleteIcon.addEventListener('click', event => {
                const id = event.target.id
                Utils.deleteObject(id)
            })
    
            }
        })
    }, 5000)

    setTimeout(() => {
        clearInterval(interval)
    }, 5000)   
}

