enum RadioMessage {
    message1 = 49434,
    started = 53023
}
input.onPinPressed(TouchPin.P0, function () {
    basic.showString("" + Time / 60 + "Mn")
    basic.clearScreen()
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
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    WaitUntilBlocks.waitUntilButtonPressed(Button.A)
    WaitUntilBlocks.waitUntilButtonReleased(Button.B)
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("C5 C5 C5 C5 C C C C ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    if (randint(1, 9) == 1) {
        basic.showNumber(1)
    } else if (randint(1, 9) == 2) {
        basic.showNumber(2)
    } else if (randint(1, 9) == 3) {
        basic.showNumber(3)
    } else if (randint(1, 9) == 4) {
        basic.showNumber(4)
    } else if (randint(1, 9) == 5) {
        basic.showNumber(5)
    } else if (randint(1, 9) == 6) {
        basic.showNumber(6)
    } else if (randint(1, 9) == 7) {
        basic.showNumber(7)
    } else if (randint(1, 9) == 8) {
        basic.showNumber(8)
    } else if (randint(1, 9) == 9) {
        basic.showNumber(9)
    }
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("REC")
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . . # . .
        # # . # #
        `)
    record.startRecording(record.BlockingState.Blocking)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.showString("Play?")
    WaitUntilBlocks.waitUntilButtonPressed(Button.A)
    record.playAudio(record.BlockingState.Blocking)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let Time = 0
music.setBuiltInSpeakerEnabled(true)
power.lowPowerEnable(LowPowerEnable.Prevent)
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
control.waitMicros(6000)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
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
    # # # # .
    # # # . .
    # # . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # .
    # # # . .
    # # . . .
    # . . . .
    `)
basic.showLeds(`
    # # # # .
    # # # . .
    # # . . .
    # . . . .
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
    # # . . .
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
serial.writeLine("start")
basic.clearScreen()
radio.setGroup(1)
loops.everyInterval(1000, function () {
    Time += 1
})
basic.forever(function () {
    if (input.temperature() < 0) {
        music.play(music.stringPlayable("C C5 C C5 C C5 C C5 ", 200), music.PlaybackMode.UntilDone)
        serial.writeLine("temp HI")
    } else if (input.temperature() > 40) {
        music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 200), music.PlaybackMode.UntilDone)
        serial.writeLine("temp LO")
    } else {
    	
    }
})
