input.onGesture(Gesture.Shake, function () {
    x = randint(1, 3)
    radio.sendValue("g", x)
})
let x = 0
x = 1
radio.setGroup(11)
basic.forever(function () {
    if (x == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    } else if (x == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (x == 3) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
