import Todo from "./Todo";

function TodoList(props) {
  const { todos , addTodo} = props;
  console.log(todos
    );
  return (
    <>
  <h1>Create Todo</h1>
  <input type="text" onKeyDown={(e)=>e.key==="Enter" && addTodo(e)} />
  </>
  )
}
export default TodoList;
