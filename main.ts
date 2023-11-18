controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.setScore(500)
})
let race_car_4 = sprites.create(img`
    . . . . . . . 8 8 8 8 8 . . . 7 
    . . . . . 8 8 6 6 6 6 6 8 . 7 7 
    . . . . 8 8 6 6 6 6 6 6 6 8 7 7 
    . . . . 8 9 7 6 6 6 6 6 7 b 7 7 
    . . 8 8 9 9 7 6 6 6 6 6 7 9 7 7 
    . 8 6 6 9 9 7 7 6 6 6 6 7 9 7 7 
    8 6 6 6 9 9 6 7 7 7 7 7 6 9 7 7 
    8 6 6 6 9 9 8 8 8 8 8 8 8 9 7 7 
    8 6 6 6 9 b 8 b b b 8 b 8 b 7 7 
    8 6 8 8 8 8 b b b b 8 b b 8 7 7 
    8 8 3 3 8 8 6 6 6 6 8 6 6 8 7 7 
    8 3 3 8 8 8 8 8 8 8 8 8 8 8 7 7 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 
    8 8 8 8 f f f 8 8 8 8 f f f 7 7 
    . 8 8 f b b c f 8 8 f b b c 7 7 
    . . . . c f f . . . . c f f . 7 
    `, SpriteKind.Player)
let race_car_1 = sprites.create(assets.image`race car 1`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`road`)
controller.player4.moveSprite(race_car_4)
controller.player1.moveSprite(race_car_1)
let mySprite = sprites.create(assets.image`race car 2`, SpriteKind.Player)
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.ONE,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.DOWN,
MakeyMakey.MakeyMakeyKey.LEFT,
MakeyMakey.MakeyMakeyKey.RIGHT,
MakeyMakey.MakeyMakeyKey.A,
MakeyMakey.MakeyMakeyKey.SPACE
)
let race_car_3 = sprites.create(assets.image`race car 3`, SpriteKind.Player)
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.TWO,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.DOWN,
MakeyMakey.MakeyMakeyKey.LEFT,
MakeyMakey.MakeyMakeyKey.RIGHT,
MakeyMakey.MakeyMakeyKey.LEFT_CLICK,
MakeyMakey.MakeyMakeyKey.RIGHT_CLICK
)
controller.player2.moveSprite(mySprite)
controller.player3.moveSprite(race_car_3)
