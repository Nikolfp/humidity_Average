let άθροισμα = 0
let υγρασία = 0
let μέσος_όρος = 0
loops.everyInterval(60000, function () {
    άθροισμα = 0
    for (let index = 0; index < 6; index++) {
        υγρασία = pins.analogReadPin(AnalogPin.P0)
        basic.showNumber(υγρασία)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        άθροισμα = άθροισμα + υγρασία
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    μέσος_όρος = άθροισμα / 6
    basic.showNumber(Math.round(μέσος_όρος))
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
