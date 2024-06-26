enum RadioMessage {
    Call = 36293,
    message1 = 49434,
    started = 53023
}
input.onPinPressed(TouchPin.P0, function () {
    radio.sendString(control.deviceName())
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    WaitUntilBlocks.waitUntilButtonPressed(Button.A)
    WaitUntilBlocks.waitUntilButtonPressed(Button.AB)
    basic.showString("Tilt right to increase.")
    Functionturnoffradgroupnum = 1
})
datalogger.onLogFull(function () {
    datalogger.deleteLog()
})
input.onButtonPressed(Button.A, function () {
    if (Functionturnoffradgroupnum == 0 || Functionturnoff == 0) {
        if (randint(1, 3) == 1) {
            basic.showLeds(`
                . . # # #
                . # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            music.play(music.createSoundExpression(WaveShape.Noise, 5000, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.clearScreen()
        } else if (randint(1, 3) == 2) {
            basic.showLeds(`
                . . . . .
                . # # . .
                . # # # .
                . . # # .
                . . . . .
                `)
            music.play(music.createSoundExpression(WaveShape.Sine, 318, 356, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            basic.clearScreen()
        } else {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
            music.play(music.createSoundExpression(WaveShape.Sine, 0, 500000000000000, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
    }
})
input.onPinPressed(TouchPin.P2, function () {
    WaitUntilBlocks.waitUntilButtonPressed(Button.A)
    WaitUntilBlocks.waitUntilButtonPressed(Button.B)
})
input.onButtonPressed(Button.AB, function () {
    if (Functionturnoffradgroupnum == 1) {
        radio.setGroup(radgroupnum)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        Functionturnoffradgroupnum = 0
        basic.clearScreen()
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (receivedString.split("")))
})
input.onButtonPressed(Button.B, function () {
    if (Functionturnoffradgroupnum == 0 || Functionturnoff == 0) {
        basic.showString("" + (randint(1, 9)))
        basic.clearScreen()
    }
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
    record.playAudio(record.BlockingState.Nonblocking)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    if (Functionturnoffradgroupnum == 1) {
        radgroupnum += 1
        if (radgroupnum == 25) {
            radgroupnum = 1
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.tonePlayable(randint(131, 988), music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
let Time = 0
let radgroupnum = 0
let Functionturnoff = 0
let Functionturnoffradgroupnum = 0
music.setBuiltInSpeakerEnabled(true)
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
loops.everyInterval(1000, function () {
    Time += 1
})
basic.forever(function () {
    if (input.temperature() < 0) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        serial.writeLine("temp LO")
    } else if (input.temperature() > 40) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        serial.writeLine("temp HI")
    }
})
basic.forever(function () {
    datalogger.log(
    datalogger.createCV("Time", Time),
    datalogger.createCV("Functionturnoffradgroupnum", Functionturnoffradgroupnum),
    datalogger.createCV("DEVICE NAME", control.deviceName()),
    datalogger.createCV("Radgroupnum", radgroupnum),
    datalogger.createCV("Functionturnoff", Functionturnoff),
    datalogger.createCV("DEVICE SERIAL", control.deviceSerialNumber())
    )
})
loops.everyInterval(100, function () {
    if (Functionturnoffradgroupnum == 1) {
        basic.showNumber(radgroupnum)
    }
})
