const allTodo = []
let counter = 0

function todoItem(descriptionText) {
    const todoItem = {
        id: createID(),
        description: descriptionText,
        completed: false
    }
    allTodo.push(todoItem)
    return todoItem
}


function createID() {
    counter++
    return counter
}


function getTodo(filter) {
    if (!filter) {
        return allTodo
    }
    if (filter === "incomplete") {
        const incompleteTodo = allTodo.filter(toDo => !toDo.completed)
        return incompleteTodo
    }
    if (filter === "complete") {
        const completeTodo = allTodo.filter(toDo => toDo.completed)
        return completeTodo
    }

}

function setComplete(idNumber){
    for (const item of allTodo) {
        console.log("id is", item.id)
        if (item.id === idNumber) {
            console.log("found ID")
            return item.completed = true
        }
    }
    // console.log(allTodo)
    // console.log("didn't found ID")
}

module.exports = { todoItem, createID, getTodo, allTodo, setComplete }