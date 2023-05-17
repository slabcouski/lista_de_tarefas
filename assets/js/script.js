$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        let newList = $('#new-task-list');
        let newItem = $('<li></li>').text(newList.val());
        $(newItem).appendTo('#new-task')
    })
})
