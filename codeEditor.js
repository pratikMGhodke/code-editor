let editor = document.querySelector('#editor')
let aceEditor = ace.edit(editor, {
    theme: 'ace/theme/cobalt',
    mode: 'ace/mode/python'
})

aceEditor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});