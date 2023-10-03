$(document).ready(function() {
    const btn = $("#navbar-toggle")
    const navbar = $(".navbar-vertical")
    const main = $("#main-content")
    const screen = $(window)

    if (screen.width() <= 576) {
        navbar.toggleClass("sidebar-open")
        main.toggleClass("margin-sidebar-open")
    }

    btn.on("click", function() {
        navbar.toggleClass("sidebar-open")
        main.toggleClass("margin-sidebar-open")
    })
})

$(document).ready(function() {
    function adjustMinHeight() {
        let windowHeight = $(window).height()

        // 64 is navheader height
        // 56 is footer height
        let minHeight = windowHeight - 64 - 56  

        $("#main-content").css("min-height", minHeight)
    }

    adjustMinHeight();
  
    $(window).on("resize", function() {
        adjustMinHeight();
    });
});

$(document).ready(function() {
    $(".datefield").focus(function () {
        $(this).attr("type", "month");
    }).blur(function () {
        $(this).attr("type", "text");
    });
});
