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
            var inputtedDescription = $(this).find("input.new-description").val();
            var inputtedDueDate = $(this).find("input.new-dueDate").val();

            var newTaskDetails = {
                description: inputtedDescription,
                dueDate: inputtedDueDate
            };
            newTask.taskDetails.push(newTaskDetails);
        });
        console.log(newTask);

        $("ul#places").append("<li><span class='place'>" + newPlace.locale + " " + newPlace.year + "</span></li>");

        $(".place").last().click(function() {
            $("#show-place").show();

            $("#show-place h2").text(newPlace.locale);
            $(".locale").text(newPlace.locale);
            $(".year").text(newPlace.year);

            $("ul#details").text("");
            newPlace.details.forEach(function(detail) {
                $("ul#details").append("<li>" + detail.landmark + ", " + detail.highlight + ", " + detail.notes + "</li>");
            });
        });

        $("input#new-locale").val("");
        $("input#new-year").val("");
        $("input.new-landmark").val("");
        $("input.new-hilite").val("");
        $("input.new-note").val("");
    });
});
