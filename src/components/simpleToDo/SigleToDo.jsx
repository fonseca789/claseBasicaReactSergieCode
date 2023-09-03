
export const SigleToDo = ({nombre, completada}) => {
  return (<li>{nombre} 
    {completada ? '✔' : '❌'}
</li>)
}
