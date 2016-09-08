(function firstTime() {

    left();
    right();
})();

function left() {
    var left = $('h1[id^="left-"]').hide(),
    i = 0;
    (function cycle() {

        left.eq(i).fadeIn(800)
                  .delay(Math.floor(Math.random() * 3000) + 2000)
                  .fadeOut(800, cycle);

        i = ++i % left.length;

    })();
}

function right() {
    var right = $('h1[id^="right-"]').hide(),
        i = 0;

    (function cycle() {

        right.eq(i).fadeIn(800)
                  .delay(Math.floor(Math.random() * 3000) + 2000)
                  .fadeOut(800, cycle);

        i = ++i % right.length;

    })();

}
    