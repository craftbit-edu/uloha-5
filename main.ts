function zhasniLED () {
    predni.clear()
    zadni.clear()
    predni.clear()
    zadni.clear()
}
input.onButtonPressed(Button.A, function () {
    dynamickeLED("P")
})
function rozsvitLED (pozice: number) {
    predni.setPixelColor(pozice, neopixel.colors(NeoPixelColors.Orange))
    predni.show()
    basic.pause(interval)
    predni.clear()
    predni.show()
}
function dynamickeLED (strana: string) {
    animace = 100
    if (strana == "P") {
        for (let index = 0; index < 3; index++) {
            pozice = 2
            for (let index = 0; index < 3; index++) {
                predni.setPixelColor(pozice, neopixel.colors(NeoPixelColors.Orange))
                zadni.setPixelColor(7 - pozice, neopixel.colors(NeoPixelColors.Orange))
                predni.show()
                zadni.show()
                basic.pause(animace)
                pozice += -1
            }
            predni.clear()
            zadni.clear()
            predni.show()
            zadni.show()
            basic.pause(interval)
        }
    } else {
        for (let index = 0; index < 3; index++) {
            pozice = 5
            for (let index = 0; index < 3; index++) {
                predni.setPixelColor(pozice, neopixel.colors(NeoPixelColors.Orange))
                zadni.setPixelColor(pozice - 3, neopixel.colors(NeoPixelColors.Orange))
                predni.show()
                zadni.show()
                basic.pause(animace)
                pozice += -1
            }
            predni.clear()
            zadni.clear()
            predni.show()
            zadni.show()
            basic.pause(interval)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    dynamickeLED("L")
})
let pozice = 0
let animace = 0
let interval = 0
let zadni: neopixel.Strip = null
let predni: neopixel.Strip = null
predni = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
zadni = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
interval = 500
let stisk = 0
