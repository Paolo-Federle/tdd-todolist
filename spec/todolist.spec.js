const { todoItem, createID, getTodo, allTodo, setComplete } = require('../src/todolist.js')

describe ("todoItem", () => {
    it("check if Item as an ID, a description and completed set as false", () => {
        const result = todoItem("clean the windows")

        expect(result.id).toBeDefined()
        expect(result.description).toBeDefined()
        expect(result.completed).toBe(false)

    })
})

describe ("createID", () => {
    it("return an ID", () => {
        const result = createID()

        expect(result).toBeDefined()
    })
})

describe ("getTodo", () => {
    it("return all the to do items", () => {
        const todo = todoItem("clean the windows")
        const gotAllTodo = getTodo()

        expect(gotAllTodo).toBe(allTodo)
    })
})

describe ("getTodo('incomplete')", () => {
    it("return all incomplete toDo", () => {
        const gotAllTodo = getTodo("incomplete")

        expect(gotAllTodo).toEqual(allTodo)
    })
})

describe ("getTodo('complete')", () => {
    it("return all completed toDo", () => {
        const gotAllTodo = getTodo("complete")

        expect(gotAllTodo).toEqual([])
    })
})

describe ("setComplete(id)", () => {
    it("set a todo as complete", () => {
        const todo = todoItem("clean the park")
        console.log(todo)
        const setCompleted = setComplete(todo.id)

        expect(todo.completed).toBeTruthy()
    })
})
