import { useState } from "react";

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !category) return
        addTodo(title, category)
        setTitle("")
        setCategory("")
    }

    return ( 
        <div className="todo-form">
            <h2>Criar Tarefa:</h2>
            <div className="todo-form-options">
                <form value={title}
                onSubmit={handleSubmit} >
                    <input type="text"
                    placeholder="Digite o título"
                    onChange={(e) => setTitle(e.target.value)} />
                <div>
                    <select value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Selecione uma categoria</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Pessoal">Pessoal</option>
                        <option value="Estudos">Estudos</option>
                    </select>
                </div>
                <button className="submit"
                type="submit"
                style={title && category !== "" ? {opacity: "1", cursor: "pointer", transition: "0.6s ease"} : {}}
                >Criar</button>
                </form>
            </div>
        </div>    
    );
}
 
export default TodoForm;