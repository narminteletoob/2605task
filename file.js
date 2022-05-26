$(function() {
    $("#draggableThree").draggable({
        revert: "invalid",
        snap: ".drapCircle",
        snapMode: "inner"
    });
    $("#dropableOne").droppable({
        accept: "#draggableThree",
        hoverClass: "ui-state-active",
        drop: function(event, ui) {
            $("#draggableThree")
                .addClass("disappear");
            $("#dropableOne")
                .addClass("colorChange")
                .addClass("bounce");
        }
    });
});

$(function() {
    $("#draggableOne").draggable({
        revert: "invalid"
    });
    $("#dropableTwo").droppable({
        accept: "#draggableOne",
        hoverClass: "ui-state-active",
        drop: function(event, ui) {
            $("#draggableOne")
                .addClass("disappear");
            $("#dropableTwo")

        }
    });
});

$(function() {
    $("#draggableFour").draggable({
        revert: "invalid"
    });
    $("#dropableThree").droppable({
        accept: "#draggableFour",
        activeClass: "ui-state-hover",
        hoverClass: "ui-state-active",
        drop: function(event, ui) {
            $("#draggableFour")
                .addClass("disappear");
            $("#dropableThree")

        }
    });
});

$(function() {
    $("#draggableTwo").draggable({
        revert: "invalid"
    });
    $("#dropableFour").droppable({
        accept: "#draggableTwo",
        activeClass: "ui-state-hover",
        hoverClass: "ui-state-active",
        drop: function(event, ui) {
            $("#draggableTwo")
                .addClass("disappear");
            $("#dropableFour")

        }
    });
});



function myFunction() {
    alert("drag to the right color");
};