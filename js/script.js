$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

$(function () {
    $('#reserveButton, #loginButton').click(function () {
        let buttonId = $(this).attr('id'); // gets the ID of the clicked button
        if (buttonId === 'reserveButton') {
            $('#reserveModal').modal('show');
        }
        else if (buttonId === 'loginButton') {
            $('#loginModal').modal('show');
        }
    });
});