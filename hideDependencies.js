var hideDependencies = function(el) {
  window.KT.tasks.models.forEach(function(model) {
    console.log('Running for ', model.get('name'))
    var isUnblocked = true
    model.dependencies().forEach(function(task) {
      if (task.get('dependent_task_status') !== 'done') {
        isUnblocked = false
      }

    })
    if (isUnblocked) {
      return $('kt-task[data-task-id=' + model.get('id') + ']').css('display', '');
    } else {
      return $('kt-task[data-task-id=' + model.get('id') + ']').css('display', 'none');
    }
  })
}

$(window).on('kt-task:render', function() { 
  console.log('Firing on task render')
  hideDependencies()
});

KT.onInit(function() {
  console.log('Firing on init')
  hideDependencies()
})