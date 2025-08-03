input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.clearScreen()
    music.stopAllSounds()
    score = 0
})
input.onButtonPressed(Button.A, function () {
    score += 1
})
input.onButtonPressed(Button.AB, function () {
    hand = randint(1, 3)
    basic.showNumber(54321)
    if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(5000)
        basic.clearScreen()
    } else if (hand == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(5000)
        basic.clearScreen()
    } else if (hand == 3) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(5000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    score += -1
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("ready?")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("okay, press A+B")
})
let hand = 0
let score = 0
if (score <= 2) {
    music.play(music.stringPlayable("- - - - C5 C5 B C5 ", 301), music.PlaybackMode.UntilDone)
} else if (score >= 3) {
    music.play(music.stringPlayable("- - - - C C D C ", 301), music.PlaybackMode.UntilDone)
}
