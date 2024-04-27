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
	
})
radio.onReceivedString(function (receivedString) {
    WaitUntilBlocks.waitUntilPinPressed(TouchPin.P2)
    if (receivedString == "Hello, Im " + radio.receivedPacket(RadioPacketProperty.SerialNumber)) {
        music.play(music.createSoundExpression(WaveShape.Triangle, 599, 1684, 0, 255, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    }
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
        basic.clearScreen()
    } else {
    	
    }
})
input.onPinPressed(TouchPin.P1, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
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
datalogger.mirrorToSerial(true)
loops.everyInterval(10000000, function () {
    radio.sendString("Hello, Im " + radio.receivedPacket(RadioPacketProperty.SerialNumber))
    serial.writeLine("Hello, Im " + radio.receivedPacket(RadioPacketProperty.SerialNumber))
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
        `).scrollImage(0, 200)
    basic.clearScreen()
})
// nonstop stuff
basic.forever(function () {
    let Servocont = 0
    let Compon = 0
    datalogger.log(datalogger.createCV("Compon", Compon))
    serial.redirectToUSB()
})
