$(document).click(function(e) {
    $(".circle2").show();
    $(".circle2").css({left:e.pageX, top:e.pageY});
    console.log({left:e.pageX,top:e.pageY});

    $('#outerContainer').click(function(e) {
        var offset = $(this).offset();
        $('#x_axis').html(e.clientX - offset.left);
        $('#y_axis').html(e.clientY - offset.top);
    });
});


