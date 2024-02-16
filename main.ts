enum RadioMessage {
    message1 = 49434,
    started = 53023
}
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    if (randint(1, 3) == 1) {
        basic.showLeds(`
            . . # # #
            . # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
    } else if (randint(1, 3) == 2) {
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # # .
            . . # # .
            . . . . .
            `)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # # . # #
            # # . # .
            # . # . .
            # # . # .
            # # . . #
            `)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onButtonPressed(Button.B, function () {
    if (randint(1, 6) == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (randint(1, 6) == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            `)
    } else if (randint(1, 6) == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
    } else if (randint(1, 6) == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (randint(1, 6) == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (randint(1, 6) == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    } else {
    	
    }
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
	
})
music.setBuiltInSpeakerEnabled(true)
power.lowPowerEnable(LowPowerEnable.Prevent)
music.play(music.createSoundExpression(WaveShape.Triangle, 1, 3936, 37, 37, 2000, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
basic.showLeds(`
    # # . . .
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # . .
    # # . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # .
    # # # . .
    # # . . .
    # . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # .
    # # # . .
    # # . . .
    # . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # .
    # # # . .
    # # . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # .
    # # # . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.clearScreen()
serial.writeLine("start")
basic.forever(function () {
    if (input.temperature() < 0) {
        music.play(music.stringPlayable("C C C C C C C C ", 200), music.PlaybackMode.UntilDone)
        serial.writeLine("temp HI")
    } else if (input.temperature() > 40) {
        music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 200), music.PlaybackMode.UntilDone)
        serial.writeLine("temp LO")
    } else {
    	
    }
})
basic.forever(function () {
    WaitUntilBlocks.waitUntilButtonPressed(Button.AB)
    WaitUntilBlocks.waitUntilPinPressed(TouchPin.P0)
    WaitUntilBlocks.waitUntilPinPressed(TouchPin.P1)
    images.createBigImage(`
        . . # # # # # # . .
        . # . . . . . . # .
        . # . # . . # . # .
        . # . . . . . . # .
        . . # # # # # # . .
        `).scrollImage(1, 200)
    basic.clearScreen()
})
// nonstop stuff
basic.forever(function () {
	
})
