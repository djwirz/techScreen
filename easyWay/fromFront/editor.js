const runEditor = () => {
  let editorInput = editor.getValue()
  let evalInput = eval(editorInput)
  document.getElementById('editor-output').innerHTML = evalInput
}
