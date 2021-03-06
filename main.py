@namespace
class SpriteKind:
    Win = SpriteKind.create()
    PISOLETAL = SpriteKind.create()
    LAVA = SpriteKind.create()

def on_a_pressed():
    if hero.vy == 0:
        hero.vy = -345
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    game.over(False)
sprites.on_overlap(SpriteKind.player, SpriteKind.LAVA, on_on_overlap)

def on_overlap_tile(sprite2, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile)

def on_on_overlap2(sprite3, otherSprite2):
    info.change_life_by(1)
    otherSprite2.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.player, on_on_overlap2)

def on_overlap_tile2(sprite4, location2):
    global VIDITA_EXT
    tiles.set_tilemap(tilemap("""
        level2
    """))
    scene.set_background_image(img("""
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccc66ccccccccc6cccccccccccccccccccccccccccc66ccccccccc6cccccccccccccccccccccccccccc66ccccccccc6cccccccccccccccccccccccccccc66ccccccccc6ccccccccccccccccccccccccc
                c666ccccccccc66ccccccccccccccccccccccc6cc666ccccccccc66ccccccccccccccccccccccc6cc666ccccccccc66ccccccccccccccccccccccc6cc666ccccccccc66ccccccccccccccccccccccc6c
                cc6cc66ccc66cc66cccc66cccccccccccccccc66cc6cc66ccc66cc66cccc66cccccccccccccccc66cc6cc66ccc66cc66cccc66cccccccccccccccc66cc6cc66ccc66cc66cccc66cccccccccccccccc66
                666666cc6cc66c66cc6c66cccccccccccccc66c6666666cc6cc66c66cc6c66cccccccccccccc66c6666666cc6cc66c66cc6c66cccccccccccccc66c6666666cc6cc66c66cc6c66cccccccccccccc66c6
                66666ccc66c66666c6666ccccccccccccc6666cc66666ccc66c66666c6666ccccccccccccc6666cc66666ccc66c66666c6666ccccccccccccc6666cc66666ccc66c66666c6666ccccccccccccc6666cc
                66666c66666666c66666ccc6cccccc666ccc666c66666c66666666c66666ccc6cccccc666ccc666c66666c66666666c66666ccc6cccccc666ccc666c66666c66666666c66666ccc6cccccc666ccc666c
                6666666666666cc66cc66666cc666ccc66ccc6666666666666666cc66cc66666cc666ccc66ccc6666666666666666cc66cc66666cc666ccc66ccc6666666666666666cc66cc66666cc666ccc66ccc666
                6666666666666c6666cc666cc6cc66cc666666666666666666666c6666cc666cc6cc66cc666666666666666666666c6666cc666cc6cc66cc666666666666666666666c6666cc666cc6cc66cc66666666
                66b66666666666666666666c66ccc66c6666666666b66666666666666666666c66ccc66c6666666666b66666666666666666666c66ccc66c6666666666b66666666666666666666c66ccc66c66666666
                66b6666666666666666666666b6cc6666666666666b6666666666666666666666b6cc6666666666666b6666666666666666666666b6cc6666666666666b6666666666666666666666b6cc66666666666
                66b6666666666666666666666bb6c6666666666666b6666666666666666666666bb6c6666666666666b6666666666666666666666bb6c6666666666666b6666666666666666666666bb6c66666666666
                66b6666666fbb66666666ff66bbb66666666666666b6666666fbb66666666ff66bbb66666666666666b6666666fbb66666666ff66bbb66666666666666b6666666fbb66666666ff66bbb666666666666
                66b666666ffdbb666666ddf666bb66666666666666b666666fffbb666666fff666bb66666666666666b666666fffbb666666fff666bb66666666666666b666666fffbb666666fff666bb666666666666
                6bb666f66ff66bbb6f666dff66bb6666666666666bb666f66ff66bbb6f666dff66bb6666666666666bb666f66ff66bbb6f666dff66bb6666666666666bb666f66ff66bbb6f666dff66bb666666666666
                6bb666df66f6dfbbbff66dff66bbb666666666666bb666df66f6dfbbbff66dff66bbb666666666666bb666df66f6dfbbbff66dff66bbb666666666666bb666df66f6dfbbbff66dff66bbb66666666666
                6bb66ddffffdff6bbffdddf6666bb666666666666bb66ddffffdff6bbffdddf6666bb666666666666bb66ddffffdff6bbffdddf6666bb666666666666bb66ddffffdff6bbffdddf6666bb66666666666
                bbb666dffffdff6bbffddff66fdbbb66f6666666bbb666dffffdff6bbffddff66fdbbb66f6666666bbb666dffffdff6bbffddff66fdbbb66f6666666bbb666dffffdff6bbffddff66fdbbb66f6666666
                bbbdd6dffffdfffbbbfddfffff6bbb66fff66666bbbdd6dffffdfffbbbfddfffff6bbb66fff66666bbbdd6dffffdfffbbbfddfffff6bbb66fff66666bbbdd6dffffdfffbbbfddfffff6bbb66fff66666
                bbb6dddffffdffffbbfddffffd6bbbf6ff666666bbb6dddffffdffffbbfddffffd6bbbf6ff666666bbb6dddffffdffffbbfddffffd6bbbf6ff666666bbb6dddffffdffffbbfddffffd6bbbf6ff666666
                bbb6dddfffdfffffbbbddffffdfbbbffff66ff66bbb6dddfffdfffffbbbddffffdfbbbffff66ff66bbb6dddfffdfffffbbbddffffdfbbbffff66ff66bbb6dddfffdfffffbbbddffffdfbbbffff66ff66
                bbbddddfffdffffffbbddffffdfbbbbffffdfff6bbbddddfffdffffffbbddffffdfbbbbffffdfff6bbbddddfffdffffffbbddffffdfbbbbffffdfff6bbbddddfffdffffffbbddffffdfbbbbffffdfff6
                bbfddddffddfffffffbbffffddfbbbbffffdffffbbfddddffddfffffffbbffffddfbbbbffffdffffbbfddddffddfffffffbbffffddfbbbbffffdffffbbfddddffddfffffffbbffffddfbbbbffffdffff
                bbffdddddfffffffffbbbfffdfffbbbffffdffffbbffdddddfffffffffbbbfffdfffbbbffffdffffbbffdddddfffffffffbbbfffdfffbbbffffdffffbbffdddddfffffffffbbbfffdfffbbbffffdffff
                bbffddddffffffffffdbbbbddfffbbbffffdfffbbbffddddffffffffffdbbbbddfffbbbffffdfffbbbffddddffffffffffdbbbbddfffbbbffffdfffbbbffddddffffffffffdbbbbddfffbbbffffdfffb
                bbffdddfffffffffffddbbbbffffbbbbfffdfffbbbffdddfffffffffffddbbbbffffbbbbfffdfffbbbffdddfffffffffffddbbbbffffbbbbfffdfffbbbffdddfffffffffffddbbbbffffbbbbfffdfffb
                bbffdddfffffffffffddbbbbbbffbbbbfffdfffbbbffdddfffffffffffddbbbbbbffbbbbfffdfffbbbffdddfffffffffffddbbbbbbffbbbbfffdfffbbbffdddfffffffffffddbbbbbbffbbbbfffdfffb
                bffffddffffffffffddddbbbbbbbbbbbbfffdffbbffffddffffffffffddddbbbbbbbbbbbbfffdffbbffffddffffffffffddddbbbbbbbbbbbbfffdffbbffffddffffffffffddddbbbbbbbbbbbbfffdffb
                bffffdddfffffffffddfffffbbbbbbbbbfffdffbbffffdddfffffffffddfffffbbbbbbbbbfffdffbbffffdddfffffffffddfffffbbbbbbbbbfffdffbbffffdddfffffffffddfffffbbbbbbbbbfffdffb
                bffffddddffffffffddffffffbbbbbbbbfffdfbbbffffddddffffffffddffffffbbbbbbbbfffdfbbbffffddddffffffffddffffffbbbbbbbbfffdfbbbffffddddffffffffddffffffbbbbbbbbfffdfbb
                bffffdddddffffffdddfffffffbbbbbbbfffdbbbbffffdddddffffffdddfffffffbbbbbbbfffdbbbbffffdddddffffffdddfffffffbbbbbbbfffdbbbbffffdddddffffffdddfffffffbbbbbbbfffdbbb
                ddfffffdddddffffdddfffffffffbbbbbfffbbbbddfffffdddddffffdddfffffffffbbbbbfffbbbbddfffffdddddffffdddfffffffffbbbbbfffbbbbddfffffdddddffffdddfffffffffbbbbbfffbbbb
                fdfffffdddddddfdddffffffffffbbbbbffbbbbffdfffffdddddddfdddffffffffffbbbbbffbbbbffdfffffdddddddfdddffffffffffbbbbbffbbbbffdfffffdddddddfdddffffffffffbbbbbffbbbbf
                fdffffffddddddddddffffffffffbbbbbffbbbfffdffffffddddddddddffffffffffbbbbbffbbbfffdffffffddddddddddffffffffffbbbbbffbbbfffdffffffddddddddddffffffffffbbbbbffbbbff
                fdffffffdddddddddfffffffffffbbbbbffbbffffdffffffdddddddddfffffffffffbbbbbffbbffffdffffffdddddddddfffffffffffbbbbbffbbffffdffffffdddddddddfffffffffffbbbbbffbbfff
                fddfffffdddddddfffffffffffffbbbbbffbbdfffddfffffdddddddfffffffffffffbbbbbffbbdfffddfffffdddddddfffffffffffffbbbbbffbbdfffddfffffdddddddfffffffffffffbbbbbffbbdff
                ffddffffddddddffffffffffffffbbbbbffbbdffffddffffddddddffffffffffffffbbbbbffbbdffffddffffddddddffffffffffffffbbbbbffbbdffffddffffddddddffffffffffffffbbbbbffbbdff
                ffdddfffddddddffffffffffffffbbbbbfbbbddfffdddfffddddddffffffffffffffbbbbbfbbbddfffdddfffddddddffffffffffffffbbbbbfbbbddfffdddfffddddddffffffffffffffbbbbbfbbbddf
                ffffddddddddddfffffffffffffbbbbbbfbbbfdfffffddddddddddfffffffffffffbbbbbbfbbbfdfffffddddddddddfffffffffffffbbbbbbfbbbfdfffffddddddddddfffffffffffffbbbbbbfbbbfdf
                ffffddddddddddfffffffffffffbbbbbbbbbffdfffffddddddddddfffffffffffffbbbbbbbbbffdfffffddddddddddfffffffffffffbbbbbbbbbffdfffffddddddddddfffffffffffffbbbbbbbbbffdf
                ffffffddddddddfffffffffffffbbbbbbbbbffddffffffddddddddfffffffffffffbbbbbbbbbffddffffffddddddddfffffffffffffbbbbbbbbbffddffffffddddddddfffffffffffffbbbbbbbbbffdd
                dfffffffddddddffffffffffffbbbbbbbbbffffddfffffffddddddffffffffffffbbbbbbbbbffffddfffffffddddddffffffffffffbbbbbbbbbffffddfffffffddddddffffffffffffbbbbbbbbbffffd
                ddfffffffdddddffffffffffffbbbbbbbbbfffffddfffffffdddddffffffffffffbbbbbbbbbfffffddfffffffdddddffffffffffffbbbbbbbbbfffffddfffffffdddddffffffffffffbbbbbbbbbfffff
                ddfffffffdddddffffffffffffbbbbbbbbffffffddfffffffdddddffffffffffffbbbbbbbbffffffddfffffffdddddffffffffffffbbbbbbbbffffffddfffffffdddddffffffffffffbbbbbbbbffffff
                fdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbffffff
                fdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbffffff
                fdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbffffff
                fdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbffffff
                fddffffffdddddfffffffffffbbbbbbbbffffffffddffffffdddddfffffffffffbbbbbbbbffffffffddffffffdddddfffffffffffbbbbbbbbffffffffddffffffdddddfffffffffffbbbbbbbbfffffff
                fddffffffdddddfffffffffffbbbbbbbbffffffffddffffffdddddfffffffffffbbbbbbbbffffffffddffffffdddddfffffffffffbbbbbbbbffffffffddffffffdddddfffffffffffbbbbbbbbfffffff
                dddffffffdddddfffffffffffbbbbbbbbfffffffdddffffffdddddfffffffffffbbbbbbbbfffffffdddffffffdddddfffffffffffbbbbbbbbfffffffdddffffffdddddfffffffffffbbbbbbbbfffffff
                ddfffffffdddddfffffffffffbbbbbbbbfffffffddfffffffdddddfffffffffffbbbbbbbbfffffffddfffffffdddddfffffffffffbbbbbbbbfffffffddfffffffdddddfffffffffffbbbbbbbbfffffff
                ddfffffffddddddffffffffffbbbbbbbbfffffffddfffffffddddddffffffffffbbbbbbbbfffffffddfffffffddddddffffffffffbbbbbbbbfffffffddfffffffddddddffffffffffbbbbbbbbfffffff
                ddfffffffddddddffffffffffbbbbbbbbfffffffddfffffffddddddffffffffffbbbbbbbbfffffffddfffffffddddddffffffffffbbbbbbbbfffffffddfffffffddddddffffffffffbbbbbbbbfffffff
                dffffffffddddddffffffffffbbbbbbbffffffffddfffffffddddddffffffffffbbbbbbbffffffffddfffffffddddddffffffffffbbbbbbbffffffffddfffffffddddddffffffffffbbbbbbbffffffff
                dffffffffddddddffffffffffbbbbbbbfffffffddffffffffddddddffffffffffbbbbbbbfffffffddffffffffddddddffffffffffbbbbbbbfffffffddffffffffddddddffffffffffbbbbbbbfffffffd
                dffffffffddddddffffffffffbbbbbbbffffffdddffffffffddddddffffffffffbbbbbbbffffffdddffffffffddddddffffffffffbbbbbbbffffffdddffffffffddddddffffffffffbbbbbbbffffffdd
                dffffffffddddddffffffffffbbbbbbbffffffdddffffffffddddddffffffffffbbbbbbbffffffdddffffffffddddddffffffffffbbbbbbbffffffdddffffffffddddddffffffffffbbbbbbbffffffdd
                fffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffddd
                fffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffddd
                fffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffddd
                fffffffffddddddddffffffffbbbbbbbffffddddfffffffffddddddddffffffffbbbbbbbffffddddfffffffffddddddddffffffffbbbbbbbffffddddfffffffffddddddddffffffffbbbbbbbffffdddd
                fffffffffddddddddffffffffbbbbbbbffffddddfffffffffddddddddffffffffbbbbbbbffffddddfffffffffddddddddffffffffbbbbbbbffffddddfffffffffddddddddffffffffbbbbbbbffffdddd
                fffffffffddddddddffffffffbbbbbbbffffdddffffffffffddddddddffffffffbbbbbbbffffdddffffffffffddddddddffffffffbbbbbbbffffdddffffffffffddddddddffffffffbbbbbbbffffdddf
                ffffffffffddddddddffffffbbbbbbbbffffdddfffffffffffddddddddffffffbbbbbbbbffffdddfffffffffffddddddddffffffbbbbbbbbffffdddfffffffffffddddddddffffffbbbbbbbbffffdddf
                dfffffffffddddddddffffffbbbbbbbbdddddddddfffffffffddddddddffffffbbbbbbbbdddddddddfffffffffddddddddffffffbbbbbbbbdddddddddfffffffffddddddddffffffbbbbbbbbdddddddd
                dddddfffffddddddddffffffbbbbbbbbbddddddddddddfffffddddddddffffffbbbbbbbbbddddddddddddfffffddddddddffffffbbbbbbbbbddddddddddddfffffddddddddffffffbbbbbbbbbddddddd
                ddddddddffdddddddddfffddbbbbbbbbbdddddddddddddddffdddddddddfffddbbbbbbbbbdddddddddddddddffdddddddddfffddbbbbbbbbbdddddddddddddddffdddddddddfffddbbbbbbbbbddddddd
                dddddddddddddddddddfddddbbbbbbbbbddddddddddddddddddddddddddfddddbbbbbbbbbddddddddddddddddddddddddddfddddbbbbbbbbbddddddddddddddddddddddddddfddddbbbbbbbbbddddddd
                ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
                ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
                dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
                dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
                dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
                dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
                dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
                ddddddddddddddddddd6666666666bbbbbbdddddddddddddddddddddddd6666666666bbbbbbdddddddddddddddddddddddd6666666666bbbbbbdddddddddddddddddddddddd6666666666bbbbbbddddd
                dddddddddddddd66666666666666666666bddddddddddddddddddd66666666666666666666bddddddddddddddddddd66666666666666666666bddddddddddddddddddd66666666666666666666bddddd
                ddddddddddd6666666666666666666666666ddddddddddddddd6666666666666666666666666ddddddddddddddd6666666666666666666666666ddddddddddddddd6666666666666666666666666dddd
                dddddddd666666666666666666666666666666dddddddddd666666666666666666666666666666dddddddddd666666666666666666666666666666dddddddddd666666666666666666666666666666dd
                ddddd66666666666666666666666666666666666ddddd66666666666666666666666666666666666ddddd66666666666666666666666666666666666ddddd66666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
                6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    """))
    for value in tiles.get_tiles_by_type(assets.tile("""
        myTile5
    """)):
        VIDITA_EXT = sprites.create(img("""
                ..............eeeeeee...........
                            ............ee455662e2e.........
                            ..........ee45556723e2688.......
                            .........e46776677232e777668....
                            ........e46745554772227776778...
                            .......4448744444777766777678...
                            ......4522e7777776777766676668..
                            .....4523227766722e666eeeee888..
                            ....455232e76672322e4555dddd48..
                            ...44567777554623e455ddddddddd4.
                            ...e66774554477e455dddd55554dd44
                            ..e46777444677e55dd55555d55dddd4
                            ..e5668677666e5dd555555555555dde
                            .e45544e8776e5d555554555555555de
                            .e554eeee66e5d5555d55555dddd54de
                            .e55ee44fee5d5d555555d5d5dddddde
                            e454eeeefe45d55555555555dd4ddde.
                            e5e4eefffe5d55555555d5555dddde..
                            e5ee4eeff45d555555555555dddde...
                            e5eeeeffe5d55d555d5555d5ddde....
                            e5ffefeee5d55545555555ddd4e.....
                            e5ffffffe545555555d5d4ddee......
                            e54efeff45d55d55555dddde........
                            e5eeeffe5dd5555545dddee.........
                            e4eeefff5d5555d55ddde...........
                            e4efefff5d5d55555d4e............
                            .e4efffe5d555555dee.............
                            .e54eeee5d545dd4e...............
                            ..e554ee5dddddee................
                            ...ee5544dddee..................
                            .....eeeeeee....................
                            ................................
            """),
            SpriteKind.player)
        animation.run_image_animation(VIDITA_EXT,
            [img("""
                . . . . . . . e e e e . . . . . 
                            . . . . . e e 4 5 5 5 e e . . . 
                            . . . . e 4 5 6 2 2 7 6 6 e . . 
                            . . . e 5 6 6 7 2 2 6 4 4 4 e . 
                            . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
                            . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                            . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                            e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                            e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                            e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                            e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                            e 5 e c 5 4 5 4 5 5 5 e e . . . 
                            e 5 e e 5 5 5 5 5 4 e . . . . . 
                            4 5 4 e 5 5 5 5 e e . . . . . . 
                            . 4 5 4 5 5 4 e . . . . . . . . 
                            . . 4 4 e e e . . . . . . . . .
            """)],
            500,
            True)
        tiles.place_on_tile(VIDITA_EXT, value)
        tiles.set_tile_at(value, assets.tile("""
            transparency16
        """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile2)

VIDITA_EXT: Sprite = None
hero: Sprite = None
hero = sprites.create(img("""
        ........................
            .....ffff...............
            ...fff22fff.............
            ..fff2222fff............
            .fffeeeeeefff...........
            .ffe222222eef...........
            .fe2ffffff2ef...........
            .ffffeeeeffff...........
            ffefbf44fbfeff..........
            fee41fddf14eef..........
            .ffffdddddeef...........
            fddddf444eef............
            fbbbbf2222f4e...........
            fbbbbf2222fd4...........
            .fccf45544f44...........
            ..ffffffff..............
            ....ff..ff..............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
    """),
    SpriteKind.player)
hero.ay = 1500
scene.camera_follow_sprite(hero)
controller.move_sprite(hero, 80, 0)
info.set_life(3)
scene.set_background_color(9)
tiles.set_tilemap(tilemap("""
    level1
"""))
for value2 in tiles.get_tiles_by_type(assets.tile("""
    myTile5
""")):
    VIDITA_EXT = sprites.create(img("""
            ..............eeeeeee...........
                    ............ee455662e2e.........
                    ..........ee45556723e2688.......
                    .........e46776677232e777668....
                    ........e46745554772227776778...
                    .......4448744444777766777678...
                    ......4522e7777776777766676668..
                    .....4523227766722e666eeeee888..
                    ....455232e76672322e4555dddd48..
                    ...44567777554623e455ddddddddd4.
                    ...e66774554477e455dddd55554dd44
                    ..e46777444677e55dd55555d55dddd4
                    ..e5668677666e5dd555555555555dde
                    .e45544e8776e5d555554555555555de
                    .e554eeee66e5d5555d55555dddd54de
                    .e55ee44fee5d5d555555d5d5dddddde
                    e454eeeefe45d55555555555dd4ddde.
                    e5e4eefffe5d55555555d5555dddde..
                    e5ee4eeff45d555555555555dddde...
                    e5eeeeffe5d55d555d5555d5ddde....
                    e5ffefeee5d55545555555ddd4e.....
                    e5ffffffe545555555d5d4ddee......
                    e54efeff45d55d55555dddde........
                    e5eeeffe5dd5555545dddee.........
                    e4eeefff5d5555d55ddde...........
                    e4efefff5d5d55555d4e............
                    .e4efffe5d555555dee.............
                    .e54eeee5d545dd4e...............
                    ..e554ee5dddddee................
                    ...ee5544dddee..................
                    .....eeeeeee....................
                    ................................
        """),
        SpriteKind.player)
    animation.run_image_animation(VIDITA_EXT,
        [img("""
            . . . . . . . e e e e . . . . . 
                    . . . . . e e 4 5 5 5 e e . . . 
                    . . . . e 4 5 6 2 2 7 6 6 e . . 
                    . . . e 5 6 6 7 2 2 6 4 4 4 e . 
                    . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
                    . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
                    . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
                    e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
                    e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
                    e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
                    e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
                    e 5 e c 5 4 5 4 5 5 5 e e . . . 
                    e 5 e e 5 5 5 5 5 4 e . . . . . 
                    4 5 4 e 5 5 5 5 e e . . . . . . 
                    . 4 5 4 5 5 4 e . . . . . . . . 
                    . . 4 4 e e e . . . . . . . . .
        """)],
        500,
        True)
    tiles.place_on_tile(VIDITA_EXT, value2)
    tiles.set_tile_at(value2, assets.tile("""
        transparency16
    """))

def on_on_update():
    if hero.vx > 0:
        hero.set_image(img("""
            ....ffffff..............
                        ..ffeeeef2f.............
                        .ffeeeef222f............
                        .feeeffeeeef............
                        .ffffee2222ef...........
                        .fe222ffffe2f...........
                        fffffffeeefff...........
                        ffe44ebf44eef...........
                        fee4d41fddef............
                        .feee4ddddf.............
                        ..fdde444ef.............
                        ..fdde22ccc.............
                        ...eef22cdc.............
                        ...f4444cddc............
                        ....fffffcddc...........
                        .....fff..cddc..........
                        ...........cdc..........
                        ............cc..........
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
        """))
    elif hero.vx < 0:
        hero.set_image(img("""
            ..............ffffff....
                        .............f2feeeeff..
                        ............f222feeeeff.
                        ............feeeeffeeef.
                        ...........fe2222eeffff.
                        ...........f2effff222ef.
                        ...........fffeeefffffff
                        ...........fee44fbe44eff
                        ............feddf14d4eef
                        .............fdddd4eeef.
                        .............fe444eddf..
                        .............ccc22eddf..
                        .............cdc22fee...
                        ............cddc4444f...
                        ...........cddcfffff....
                        ..........cddc..fff.....
                        ..........cdc...........
                        ..........cc............
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
        """))
    else:
        hero.set_image(img("""
            ........................
                        .....ffff...............
                        ...fff22fff.............
                        ..fff2222fff............
                        .fffeeeeeefff...........
                        .ffe222222eef...........
                        .fe2ffffff2ef...........
                        .ffffeeeeffff...........
                        ffefbf44fbfeff..........
                        fee41fddf14eef..........
                        .ffffdddddeef...........
                        fddddf444eef............
                        fbbbbf2222f4e...........
                        fbbbbf2222fd4...........
                        .fccf45544f44...........
                        ..ffffffff..............
                        ....ff..ff..............
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
                        ........................
        """))
game.on_update(on_on_update)

