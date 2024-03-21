var hideDependencies = function(el) {
  window.KT.tasks.models.forEach(function(model) {
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

$(window).on('kt-task:render', hideDependencies);

KT.onInit(hideDependencies)