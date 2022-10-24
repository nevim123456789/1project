input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    x += -1
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    y += -1
    basic.pause(200)
    y += 1
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    x += 1
})
input.onGesture(Gesture.Shake, function () {
    x = 2
    y = 1
})
let y = 0
let x = 0
basic.clearScreen()
x = 2
y = 1
basic.forever(function () {
    led.plot(x, y)
    led.plot(x - 1, y + 1)
    led.plot(x - 0, y + 1)
    led.plot(x + 1, y + 1)
    led.plot(x + 0, y + 2)
    led.plot(x - 1, y + 3)
    led.plot(x + 1, y + 3)
    if (x == 4) {
        basic.clearScreen()
        x = -1
    }
})
