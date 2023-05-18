$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        let newList = $('#new-task-list');
        let newItem = $('<input type="checkbox">');
        let newCheck = $(`<li></li>`);
        $(newItem).appendTo(newCheck);
        $(`<p></p>`).text(newList.val()).appendTo(newCheck);
        
        $(newCheck).appendTo('#new-task');
        $(newList).val('');
    })
})
