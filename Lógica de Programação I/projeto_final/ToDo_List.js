// Projeto final - Lógica de Programação I

// função para adicionar uma tarefa ao array
// recebe a descrição da tarefa
function addTask(description) {

    // busca o maior ID existente
    const max_id = todo_list.reduce((max, task) => task.id > max ? task.id : max, 0)

    // cria a nova tarefa 
    const new_task = { 
        "id": max_id + 1,
        "description": description
    }

    // adiciona a nova tarefa ao array
    todo_list.push(new_task)
}

// função para modificar uma tarefa do array
// recebe o id e a nova descrição da tarefa
function updateTask(id, new_description) {

    // busca a tarefa através do ID
    let task = todo_list.find(item => item.id === id)
    
    // checa se existe a tarefa
    if (task) {
        // atualiza a descrição
        task.description = new_description
    } else {
        // imprime erro
        console.log(`A tarefa de ID ${id} não existe.`)
    }
}

// função para remover uma tarefa do array
// recebe o ID e remove a tarefa
function removeTask(id) {

    // busca a tarefa através do ID
    let task = todo_list.find(item => item.id === id)

    // checa se existe a tarefa
    if (task) {
        // remove a tarefa
        todo_list = todo_list.filter(item => item !== task)
    } else {
        // imprime erro
        console.log(`A tarefa de ID ${id} não existe.`)
    }
}

// função para listar todas as tarefas do array
// retorna a lista de tarefas
function allTasks() {

    // imprime título
    console.log('\nLista de Tarefas')
    console.log('================\n')

    // imprime as tarefas
    todo_list.forEach(task => {
        console.log(`ID ${task.id}: ${task.description}`)
    });
}

// função que busca uma tarefa específica do array
// recebe o ID e retorna a tarefa
function getTaks(id) {

    // busca a tarefa através do ID
    let task = todo_list.find(item => item.id === id)

    // checa se existe a tarefa
    if (task) {
        // imprime a tarefa
        console.log(`ID ${task.id}: ${task.description}`)
    } else {
        // imprime erro
        console.log(`A tarefa de ID ${id} não existe.`)
    }
}

// array contendo as tarefas
let todo_list = []
