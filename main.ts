input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    range = strip.range(0, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    strip.show()
})
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 14, NeoPixelMode.RGB)
let verdi = 70
strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
basic.pause(1000)
basic.forever(function () {
	
})
