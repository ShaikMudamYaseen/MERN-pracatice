const Todo = (props) => {
  console.log(props);
  return (
    <>
      <ul>
        {props.list.map((item) => (
          <>
            <li>{item.todoItem}</li>
            <button onClick={() => props.handleDelete(item.id)}>Delete</button>
          </>
        ))}
      </ul>
    </>
  );
};
export default Todo;
