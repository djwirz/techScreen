//A function to take the editor input and evaluate it
//Called on a button submit
//eval === evil, but this isn't production
const runEditor = () => {
  let editorInput = editor.getValue()
  let evalInput = eval(editorInput)
  document.getElementById('editor-output').innerHTML = evalInput
}
