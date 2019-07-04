// Check off specific todos by clicking
$('ul').on('click', 'li', function() {
  $(this).toggleClass('task-completed');
});

// Click on X to delete todo
$('ul').on('click', 'span', function(e) {
  $(this)
      .parent()
      .fadeOut(500, function() {
        $(this).remove();
      });
  e.stopPropagation(); // stops event bubbling
});

// Create new todos
$('input[type=\'text\']').keypress(function(e) {
  if (e.which === 13) {
    // if Enter was pressed:
    const todoText = $(this).val();
    $(this).val('');
    // Add a new row with the text that was entered
    $('ul').append(
        '<li> <span><i class=\'fas fa-trash-alt\'></i></span> ' + todoText + '</li>'
    );
  } else {
  }
});

$('.fa-plus').click(function(e) {
  $('input[type=\'text\']').fadeToggle();
});
