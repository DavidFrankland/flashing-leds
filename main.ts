let previous_x = 0
let x = 0
let previous_y = 0
let y = 0
basic.forever(function () {
    while (previous_x == x || previous_y == y) {
        x = randint(0, 4)
        y = randint(0, 4)
    }
    previous_x = x
    previous_y = y
    led.toggle(x, y)
})
