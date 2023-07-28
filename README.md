input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
    for (let index = 0; index < 4.354523454325433e+152; index++) {
        if (input.compassHeading() < 45) {
            basic.showString("N")
        }
        if (input.compassHeading() < 135) {
            basic.showString("E")
        }
        if (input.compassHeading() < 225) {
            basic.showString("S")
        }
        if (input.compassHeading() < 315) {
            basic.showString("W")
        }
        if (false) {
            basic.showString("N")
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        img1 = images.createBigImage(`
            . . . . . # # . . .
            . . . . # # # . . .
            . . . # # # # . . .
            . . . # # # # . . .
            . . . # # # # . . .
            `)
        img1.scrollImage(1, 200)
        img1.showImage(0)
    } else if (hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
let img1: Image = null
let hand = 0
music.setBuiltInSpeakerEnabled(true)
music.play(music.createSoundExpression(WaveShape.Square, 1, 200, 255, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
power.lowPowerEnable(LowPowerEnable.Prevent)
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
}
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
}
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
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
input.calibrateCompass()
basic.forever(function () {
	
})



> Open this page at [https://l1n3yes.github.io/microall/](https://l1n3yes.github.io/microall/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/l1n3yes/microall** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/l1n3yes/microall** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>



> Open this page at [https://l1n3yes.github.io/microall2/](https://l1n3yes.github.io/microall2/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/l1n3yes/microall2** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/l1n3yes/microall2** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
