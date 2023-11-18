def on_player2_button_a_pressed():
    info.set_score(500)
controller.player2.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player2_button_a_pressed)

race_car_1 = sprites.create(assets.image("""
    race car 1
"""), SpriteKind.player)
scene.set_background_image(assets.image("""
    road
"""))
controller.player1.move_sprite(race_car_1)
mySprite = sprites.create(assets.image("""
    race car 2
"""), SpriteKind.player)
MakeyMakey.set_simulator_keymap(MakeyMakey.PlayerNumber.ONE,
    MakeyMakey.MakeyMakeyKey.UP,
    MakeyMakey.MakeyMakeyKey.DOWN,
    MakeyMakey.MakeyMakeyKey.LEFT,
    MakeyMakey.MakeyMakeyKey.RIGHT,
    MakeyMakey.MakeyMakeyKey.A,
    MakeyMakey.MakeyMakeyKey.SPACE)
MakeyMakey.set_simulator_keymap(MakeyMakey.PlayerNumber.ONE,
    MakeyMakey.MakeyMakeyKey.UP,
    MakeyMakey.MakeyMakeyKey.DOWN,
    MakeyMakey.MakeyMakeyKey.LEFT,
    MakeyMakey.MakeyMakeyKey.RIGHT,
    MakeyMakey.MakeyMakeyKey.LEFT_CLICK,
    MakeyMakey.MakeyMakeyKey.RIGHT_CLICK)
controller.player2.move_sprite(mySprite)