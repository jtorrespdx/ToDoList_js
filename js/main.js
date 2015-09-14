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

    $("form#new-place").submit(function(event) {
        event.preventDefault();

        var inputtedLocale = $("input#new-locale").val();
        var inputtedYear = $("input#new-year").val();

        var newPlace = {
            locale: inputtedLocale,
            year: inputtedYear,
            details: []
        };

        $(".new-detail").each(function() {
            var inputtedLandmark = $(this).find("input.new-landmark").val();
            var inputtedHilite = $(this).find("input.new-hilite").val();
            var inputtedNotes = $(this).find("input.new-note").val();

            var newDetail = {
                landmark: inputtedLandmark,
                highlight: inputtedHilite,
                notes: inputtedNotes
            };
            newPlace.details.push(newDetail);
        });

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
