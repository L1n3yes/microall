input.onPinPressed(TouchPin.P0, function () {
    serial.writeLine("P0")
})
input.onButtonPressed(Button.A, function () {
    serial.writeLine("Apressed")
    HAND = randint(1, 3)
    if (HAND == 1) {
        basic.showLeds(`
            . . # # #
            . # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        serial.writeLine("RPSPAPER")
    } else if (HAND == 2) {
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # # .
            . . # # .
            . . . . .
            `)
        basic.clearScreen()
        serial.writeLine("RPSROCK")
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
        basic.clearScreen()
        serial.writeLine("RPSSISSOR")
    }
})
input.onPinPressed(TouchPin.P2, function () {
    serial.writeLine("P2")
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("Bpressed")
})
input.onPinPressed(TouchPin.P1, function () {
    serial.writeLine("P1")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    serial.writeLine("LOGOpressed")
    music.play(music.tonePlayable(randint(131, 988), music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
let HAND = 0
music.setBuiltInSpeakerEnabled(true)
power.lowPowerEnable(LowPowerEnable.Prevent)
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
}
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        `)
}
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        `)
}
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        `)
}
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        # # # . .
        `)
}
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
basic.clearScreen()
serial.writeLine("test")
serial.writeLine("m:b active")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        WaitUntilBlocks.waitUntilButtonPressed(Button.B)
        control.reset()
    }
})
basic.forever(function () {
    serial.redirectToUSB()
    if (input.temperature() < 0) {
        serial.writeLine("micro:bit cold")
        music.play(music.stringPlayable("C C5 C C5 C C5 - - ", 200), music.PlaybackMode.UntilDone)
    }
    if (input.temperature() > 40) {
        serial.writeLine("micro:bit hot")
        music.play(music.stringPlayable("C5 C C5 C C5 C - - ", 200), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    WaitUntilBlocks.waitUntilButtonPressed(Button.AB)
    WaitUntilBlocks.waitUntilPinPressed(TouchPin.P0)
    WaitUntilBlocks.waitUntilPinPressed(TouchPin.P1)
    music.play(music.stringPlayable("C C5 B D G A C - ", 120), music.PlaybackMode.UntilDone)
})
