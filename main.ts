controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sdwireless.sdw_mbit_send_string("A")
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sdwireless.sdw_mbit_send_string("B")
})
let 新命令 = ""
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 9 6 6 6 6 6 6 c 6 . . . 
    . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
    . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
    . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
    . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
    . 6 8 b b b 8 b b b b 8 6 6 6 6 
    . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
    . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
    . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
    . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
    . 8 f f f f 8 8 8 8 f f f 8 8 8 
    . . f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
music.powerUp.play()
sdwireless.sdw_init()
sdwireless.sdw_set_radiogp(7)
let 上一個命令 = ""
forever(function () {
    if (controller.up.isPressed()) {
        新命令 = "前進"
    } else if (controller.down.isPressed()) {
        新命令 = "後退"
    } else if (controller.left.isPressed()) {
        新命令 = "左轉"
    } else if (controller.right.isPressed()) {
        新命令 = "右轉"
    } else {
        新命令 = "停止"
    }
    if (新命令 != 上一個命令) {
        上一個命令 = 新命令
        sdwireless.sdw_mbit_send_string(新命令)
    }
})
