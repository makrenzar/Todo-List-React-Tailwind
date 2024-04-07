import { useState } from "react";
import 'boxicons';

function Todo() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleForm = (e) => {
        e.preventDefault();
        setTodoList([...todoList, { todoName: todo }]);
        setTodo("");
    };

    const deleteTodo = (deleteValue) => {
        const restTodoList = [
            ...todoList.filter((val) => {
                return val.todoName !== deleteValue;
            }),
        ];
        setTodoList(restTodoList);
    };

    return (
        <div className="bg-white w-full h-screen flex items-center">
            <div className="w-[700px] mx-auto text-center bg-off-white p-5 border-2 border-black rounded-lg">
                <h1 className="text-5xl font-bold mb-8 text-brown">Todo List</h1>
                <form onSubmit={handleForm}>
                    <input
                        className="border-2 placeholder:text-black rounded-lg border-black w-full p-5 mb-5 text-black  hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
                        type="text"
                        placeholder="Add Todo-List"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button type="submit" className="px-4 py-2 rounded-md border-2 border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                        Add
                    </button>
                </form>
                <div className="todo-show-area">
                    <ul>
                        {todoList.map((singleTodo, index) => {
                            return (
                                <li
                                    key={index}
                                    className=" mt-5 p-3 flex justify-between  text-black  rounded-lg text-lg  border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
                                >
                                    {singleTodo.todoName}{" "}

                                    <span onClick={() => deleteTodo(singleTodo.todoName)}
                                        className="text-red-600 cursor-pointer">
                                        <box-icon name='x'></box-icon>

                                    </span>

                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Todo;
