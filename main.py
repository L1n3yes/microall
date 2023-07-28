def on_pin_pressed_p0():
    serial.write_line("P0")
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    global HAND
    serial.write_line("Apressed")
    HAND = randint(1, 3)
    if HAND == 1:
        basic.show_leds("""
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            # # # # #
            """)
        basic.clear_screen()
        serial.write_line("RPSPAPER")
    elif HAND == 2:
        basic.show_leds("""
            . . . . .
            . # # . .
            . # # # .
            . . # # .
            . . . . .
            """)
        basic.clear_screen()
        serial.write_line("RPSROCK")
    else:
        basic.show_leds("""
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            """)
        basic.clear_screen()
        serial.write_line("RPSSISSOR")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    serial.write_line("P2")
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_button_pressed_b():
    serial.write_line("Bpressed")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    serial.write_line("P1")
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def on_logo_pressed():
    serial.write_line("LOGOpressed")
    music.play(music.tone_playable(randint(131, 988), music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.IN_BACKGROUND)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

HAND = 0
music.set_built_in_speaker_enabled(True)
power.low_power_enable(LowPowerEnable.PREVENT)
basic.show_leds("""
    # # . . .
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    # # # . .
    # # . . .
    # . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    # # # # .
    # # # . .
    # # . . .
    # . . . .
    . . . . .
    """)
basic.show_leds("""
    # # # # #
    # # # # .
    # # # . .
    # # . . .
    # . . . .
    """)
basic.show_leds("""
    # # # # #
    # # # # #
    # # # # .
    # # # . .
    # # . . .
    """)
basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # # .
    # # # . .
    """)
basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    """)
basic.clear_screen()
serial.write_line("test")
serial.write_line("m:b active")

def on_forever():
    if True:
        pass
basic.forever(on_forever)

def on_forever2():
    serial.redirect_to_usb()
    if input.temperature() < 0:
        serial.write_line("micro:bit cold")
        music.play(music.string_playable("C C5 C C5 C C5 - - ", 200),
            music.PlaybackMode.UNTIL_DONE)
    elif input.temperature() > 40:
        serial.write_line("micro:bit hot")
        music.play(music.string_playable("C5 C C5 C C5 C - - ", 200),
            music.PlaybackMode.UNTIL_DONE)
    else:
        pass
basic.forever(on_forever2)

def on_forever3():
    WaitUntilBlocks.wait_until_button_pressed(Button.AB)
    WaitUntilBlocks.wait_until_pin_pressed(TouchPin.P0)
    WaitUntilBlocks.wait_until_pin_pressed(TouchPin.P1)
    music.play(music.string_playable("C C5 B D G A C - ", 120),
        music.PlaybackMode.UNTIL_DONE)
basic.forever(on_forever3)
