// Parent class
class Product {
    #id
    constructor(price, product) {
        this.#id = App.generateId()
        this._product = product
        this._price = price.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                })
    }

    get id() {
        return this.#id
    }

    set id(val) {
        alert('ID is immutable.')
    }

    get product() {
        return this._product
    }

    set product(val) {
        alert('Product type is immutable.')
    }

    get price() {
        return this._price
    }

    set price(val) {
        if (isNaN(val)) {
            alert('Price must be a number.')
        } else {
            this._price = Number(val).toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'USD'
                                        })
        }
    }
}

// Child class
class Boat extends Product {
    static categoriesChoices = {
        0: 'Single Scull',
        1: 'Double Scull',
        2: 'Quadruple Scull',
        3: 'Coxless Pair',
        4: 'Coxless Four',
        5: 'Eight',
    }

    constructor(price, category, material) {
        super(price, 'Boat')
        this._category = App.choiceField(Boat.categoriesChoices, category)
        this._material = material
        this._crewSize = this.setCrewSize()
    }

    setCrewSize() {
        const val = this.category.value
        if (val === 0) {
            return 1
        }
        if (val === 1 || val === 3) {
            return 2
        }
        if (val === 2 || val === 4) {
            return 4
        }
        return 8
    }

    get category() {
        return this._category
    }

    set category(val) {
        this._category = App.choiceField(Boat.categoriesChoices, val)
        this.crewSize = this.setCrewSize()
    }

    get crewSize() {
        return this._crewSize
    }

    set crewSize(val) {
        this._crewSize = val
    }

    get material() {
        return this._material
    }

    set material(val) {
        this._material = String(val)
    }
}

// Child class
class Oar extends Product {
    static categoriesChoices = { 0: 'Sweep', 1: 'Scull' }

    constructor(price, category, material) {
        super(price, 'Oar')
        this._category = App.choiceField(Oar.categoriesChoices, category)
        this._material = material
    }

    get category() {
        return this._category
    }

    set category(val) {
        this._category = App.choiceField(Oar.categoriesChoices, val)
    }

    get material() {
        return this._material
    }

    set material(val) {
        this._material = String(val)
    }
}

// Class to manipulate front
class App {
    static #tableBody
    static #registerForm
    static globalId = 0

    constructor() { }

    static init() {
        this.#tableBody = document.getElementById('products-table-body')
        this.#registerForm = document.getElementById('register-form')

        App.allObjects()
    }

    static allObjects() {
        this.#tableBody.innerHTML = ''
        if (database.sumObjects() > 0) {
            for (const item of database.db) {
                App.insertRow(item)
            }
        } else {
            App.insertEmptyRow()
        }
    }

    static submitForm() {
        const productValue = document.getElementById('register-product').value
        const priceValue = document.getElementById('register-price').value
        const categoryValue = document.getElementById('register-category').value
        const materialValue = document.getElementById('register-material').value

        if (!priceValue || !categoryValue || !materialValue || !productValue) {
            alert('All fields are required.')

        } else {

            const cls = productValue === 'Boat' ? Boat : Oar
            
            const data = {
                price: priceValue,
                category: categoryValue,
                material: materialValue
            }

            App.addObject(cls, data)
            this.#registerForm.reset()
        }
    }

    static insertRow(product) {
        const newRow = this.#tableBody.insertRow()
        newRow.id = product.id

        const id_cell = newRow.insertCell()
        id_cell.textContent = product.id
    
        for (const key in product) {
            const cell = newRow.insertCell()
            if (key === '_category') {
                cell.textContent = product[key].display
            } else {
                cell.textContent = product[key]
            }
        }
    
        if (!('_crewSize' in product)) {
            const cell = newRow.insertCell()
            cell.textContent = '-----'
        }
    
        const action_cell = newRow.insertCell()

        const btn_update = document.createElement('button')
        btn_update.className = 'btn btn-sm btn-outline-warning mx-1'
        btn_update.setAttribute("data-bs-toggle", "modal");
        btn_update.setAttribute("data-bs-target", "#updateModal");
        const i_update = document.createElement('i')
        i_update.className = 'fa fa-pencil'
        btn_update.appendChild(i_update)

        btn_update.onclick = function() {
            App.updateForm(product.id)
        }

        const btn_delete = document.createElement('button')
        btn_delete.className = 'btn btn-sm btn-outline-danger mx-1'
        const i_delete = document.createElement('i')
        i_delete.className = 'fa fa-trash'
        btn_delete.appendChild(i_delete)
    
        btn_delete.onclick = function() {
            App.deleteObject(product.id)
        }
        
        action_cell.appendChild(btn_update)
        action_cell.appendChild(btn_delete)
    }

    static insertEmptyRow() {
        const newRow = this.#tableBody.insertRow()
        const cell = newRow.insertCell()
        cell.colSpan = 7
        cell.textContent = 'Empty database'
    }

    static updateRow(id) {
        const obj = database.find(id)

        const row = document.getElementById(id)
        const cols = row.getElementsByTagName('td')

        cols[2].textContent = obj.price
        cols[3].textContent = obj.category.display
        cols[4].textContent = obj.material
        if (!('_crewSize' in obj)) {
            cols[5].textContent = '-----'
        } else {
            cols[5].textContent = obj.crewSize
        }
    }

    static updateForm(id) {
        const obj = database.find(id)

        const optionProduct = document.createElement('option')
        optionProduct.value = obj.product
        optionProduct.text = obj.product

        document.getElementById('update-product').appendChild(optionProduct)
        document.getElementById('update-price').value = obj.price
        document.getElementById('update-material').value = obj.material
        App.updateCategory(obj.product, 'update')
        document.getElementById('update-category').getElementsByTagName('option')[obj.category.value+1].selected = true

        document.getElementById('update-button').onclick = function() { App.updateObject(obj.id) }
    }

    static updateCategory(category, type) {
        if (category) {
            const choices = category === 'Boat' ? Boat.categoriesChoices : Oar.categoriesChoices
    
            let categorySelect = document.getElementById(`${type}-category`)
            categorySelect.innerHTML = ''
    
            const default_option = document.createElement('option')
            default_option.value = ''
            default_option.text = 'Select a category'
            categorySelect.appendChild(default_option)
    
            for (const choice in choices) {
                const option = document.createElement('option')
                option.value = choice
                option.text = choices[choice]
                categorySelect.appendChild(option)
            }
        }
    }

    static generateId() {
        ++App.globalId
        return App.globalId
    }

    static choiceField(choices, choice) {
        choice = Number(choice)
        if (choice in choices) {
            return {
                'value': choice,
                'display': choices[choice]
            }
        } else {
            alert('Choose a valid choice.')
        }
    }

    static addObject(cls, args) {
        if (database.sumObjects() === 0) {
            this.#tableBody.innerHTML = ''
        }
        const obj = new cls(...Object.values(args))
        database.add(obj)
        App.insertRow(obj)
    }

    static updateObject(id) {
        const obj = database.find(id)

        if (obj) {
            const data ={
                price: document.getElementById('update-price').value,
                category: document.getElementById('update-category').value,
                material: document.getElementById('update-material').value
            }
    
            if (!data.price || !data.category || !data.material) {
                alert('All fields are required.')

            } else {
                for (let key of Object.keys(data)) {
                    obj[key] = data[key]
                }

                App.updateRow(id)
                document.getElementById('modal-close-button').click()
            }
        } else {
            alert('Product not found.')
        }
    }

    static deleteObject(id) {
        const obj = database.find(id)

        if (obj) {
            if (confirm('Are you sure you want to delete this item?')) {
                database.delete(obj)
                document.getElementById(id).remove()

                if (database.sumObjects() === 0) {
                    App.insertEmptyRow()
                }
            }
        } else {
            alert('Product not found.')
        }
    }

    static getFilter(btn) {
        const buttonsFilter = document.getElementsByName('btn-filter')
        for (let i=0; i<buttonsFilter.length; i++) {
            buttonsFilter[i].classList = 'btn btn-dark'
        }
        btn.classList = 'btn btn-dark active'

        this.#tableBody.innerHTML = ''
        
        let filterValue = undefined
        if (btn.text === 'Boats') {
            filterValue = Boat
        } else if (btn.text === 'Oars') {
            filterValue = Oar
        }

        const objects = database.filter(filterValue)
        
        if (objects.length === 0) {
            App.insertEmptyRow()
        } else {
            for (const obj of objects) {
                App.insertRow(obj)
            }
        }
    }
}

function DB() {
    this.db = [new Boat(100000, 5, 'fiber'), new Oar(5000, 0, 'oak'), new Boat(20000, 0, 'fiber')]
}

DB.prototype.find = function(id) {
    return this.db.find(item => item.id === id)
}

DB.prototype.filter = function(cls) {
    if (cls === undefined) {
        return this.db
    }
    return this.db.filter(item => item instanceof cls)
}

DB.prototype.add = function(obj) {
    this.db.push(obj)
}

DB.prototype.delete = function(obj) {
    this.db = this.db.filter(item => item !== obj)
}

DB.prototype.sumObjects = function() {
    return this.db.length
}

const database = new DB()
App.init()
