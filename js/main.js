$(document).ready(function() {
    // $("#add-address").click(function() {
    //     $("#new-addresses").append('<div class="new-address">' +
    //         '<div class="form-group">' +
    //         '<label for="new-street">Street</label>' +
    //         '<input type="text" class="form-control new-street">' +
    //         '</div>' +
    //         '<div class="form-group">' +
    //         '<label for="new-city">City</label>' +
    //         '<input type="text" class="form-control new-city">' +
    //         '</div>' +
    //         '<div class="form-group">' +
    //         '<label for="new-state">State</label>' +
    //         '<input type="text" class="form-control new-state">' +
    //         '</div>' +
    //         '</div>');
    // });

    $("form#new-task").submit(function(event) {
        event.preventDefault();

        var inputtedTaskName = $("input#new-taskName").val();

        var newTask = {
            taskName: inputtedTaskName,
            taskDetails: []
        };

        $(".new-taskDetails").each(function() {
            var inputtedDescription = $(this).find("input.new-desc").val();
            var inputtedDueDate = $(this).find("input.new-dueDate").val();

            var newTaskDetails = {
                desc: inputtedDescription,
                dueDate: inputtedDueDate
            };
            newTask.taskDetails.push(newTaskDetails);
        });
        console.log(newTask);

        $("ul#notCompleted").append("<li><span class='taskNotCompleted clickable'>" + newTask.taskName + "</span></li>");

        // $("ul#completed").append("<li><span class='taskCompleted'>" + newTask.taskName + "</span></li>");

        $( "#done" ).click(function() {
            $( ".taskNotCompleted" ).removeClass('taskNotCompleted').addClass('taskCompleted');
        });

        $("#taskList ul").click(function() {
            $("#show-task").show();

            $("#show-task h2").text(newTask.taskName);
            $(".taskName").text(newTask.taskName);

            $("ul#taskDetails").text("");
            newTask.taskDetails.forEach(function(taskDetails) {
                $("ul#taskDetails").append("<li>" + taskDetails.desc + ", " + taskDetails.dueDate + "</li>");
            });
        });

        $("input#new-taskName").val("");
        $("input.new-desc").val("");
        $("input.new-dueDate").val("");
    });
});
