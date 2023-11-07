class Controller {
    BASE_URL = ""

    async fetchUserById(id){
        //
    }

    async fetchTodoById(id){
            const response = await fetch(`${this.BASE_URL}todos/${id}`)
            const jsonBody = await response.json()
            return jsonBody
    }
}