let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnSort = $('#btnSort')
let btnCleanUp = $('#btnCleanUp')
let btnReset = $('#btnReset')
let inpNewTask = $('#inpNewTask')

//inpNewTask.keypress((e) => {
// console.log(e.which) 
//})

function addIteam() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    listItem.click(() => {
        listItem.toggleClass('done')
    })


    ulTasks.append(listItem)
    inpNewTask.val('')
}

function clearDone(){
    $('#ulTasks .done').remove()

}

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
}


//inpNewTask.keypress((e) => {
  //  if (e.which = 13) addIteam()
//})

btnAdd.click(addIteam)
btnReset.click(() => inpNewTask.val(''))
btnCleanUp.click(clearDone)
btnSort.click(sortTasks)