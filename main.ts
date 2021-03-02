// increase by 1
input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
// a+b will show addition sign 
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
// decrease by 1 
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
// shaking will show the subtration sign 
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
})
let number = 0
number = 0
basic.showNumber(number)
