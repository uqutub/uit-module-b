class HelperService {

    todo = []

    constructor() {
        console.log('Constructor Helping Service-----------');

        this.loadInitalData();
    }

    loadInitalData() {
        for (let i = 0; i <= 10; i++) {
            this.todo.push({
                id: i,
                task: `My Task # ${i}`,
                status: 0
            });
        }
    }

    addTodo(task) {
        // add new todo
        return this.todo;
    }

    updateTodo(task) {
        // update todo
        return this.todo;
    }

    deleteTodo(id) {
        // delete todo
        return this.todo;
    }

}

let Helper = new HelperService();

export default Helper