$(document).foundation();
// initialize is-active and is-visible states on "first" tab and slides.
$("[class^=slide]").find("li").eq(0).addClass("is-active");
$("[class$=content]").find("[class$=pane]").eq(0).addClass("slide--content__pane--is-visible");

// click functions for tabs and slides
$("[class^=slide]").on("click", "li", function () {
    var $this = $(this)
        , listIndex = $this.index(); // gets the index of the clicked list item

    // add active class to currently "clicked" list item
    $this.closest("ul").find("li").removeClass("is-active"); // remove class from previously clicked li's
    $this.addClass("is-active"); // add to newly clicked li

    // display associated pane and associate the pane of the same index with the list item being clicked
    var paneIndex = $(".slide--content__pane:eq(" + listIndex + ")");
    $(".slide--content").children().removeClass("slide--content__pane--is-visible");
    paneIndex.addClass("slide--content__pane--is-visible");
});