enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Walking2,
    Ataque,
    Ataque2
}
namespace SpriteKind {
    export const Win = SpriteKind.create()
    export const PISOLETAL = SpriteKind.create()
    export const LAVA = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite2, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero.vy == 0) {
        hero.vy = -345
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.LAVA, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite3, otherSprite2) {
    info.changeLifeBy(1)
    otherSprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite4, location2) {
    tiles.setTilemap(tilemap`level2`)
    scene.setBackgroundImage(img`
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
        `)
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        VIDITA_EXT = sprites.create(img`
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
            `, SpriteKind.Player)
        animation.runImageAnimation(
        VIDITA_EXT,
        [img`
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
            `],
        500,
        true
        )
        tiles.placeOnTile(VIDITA_EXT, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile3`)) {
        enemigofinal = sprites.create(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d c d d c e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d d d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d c d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        enemigofinal,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d c d d c e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d d d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d c d e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f f e e e e e f . f f 
            . . f d b f e e f f e e f . e f 
            . f f d d f e f f e e e f . e f 
            . f f f f f f e b b f e f f e f 
            . f d d f e e e d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . f f f f f . . . . . . 
            . . . . f e e e e e f . . . . . 
            . . . f d d d d d e e f . . . . 
            . . f f f d d f f d e f f . . . 
            . c d d e e d d d d e d d f . . 
            . c c d d d d c d d e d f f f . 
            . c d c c c c d d d e d f b d f 
            . . c d d d d d d e e f f d d f 
            . . . c d d d d e e f f e f f f 
            . . . . f f f e e f e e e f . . 
            . . . . f e e e e e e e f f f . 
            . . . f e e e e e e f f f e f . 
            . . f f e e e e f f f f f e f . 
            . f b d f e e f b b f f f e f . 
            . f d d f e e f d d b f f f f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . f f f f f . . . . . . 
            . . . . f e e e e e f . . . . . 
            . . . f d d d d d d e f . . . . 
            . . f d f f d d f f d f f . . . 
            . c d d d e e d d d d e d f . . 
            . c d c d d d d c d d e f f . . 
            . c d d c c c c d d d e f f f f 
            . . c d d d d d d d e f f b d f 
            . . . c d d d d e e f f f d d f 
            . . . . f f f e e f e e e f f f 
            . . . . f e e e e e e e f f f . 
            . . . f e e e e e e f f f e f . 
            . . f f e e e e f f f f f e f . 
            . f b d f e e f b b f f f e f . 
            . f d d f f f f d d b f f f f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . . f d d d d d e e f f . . . . 
            . c d d d f f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c f f d d c d d e e b d c . . . 
            f d d f e f f f e e e f . . . . 
            f d d f e e e f f f f f . . . . 
            f f f f f e e e e e f f . f f . 
            . f f f e f f e e e f f . e f . 
            . f b d f e f f b b f f f e f . 
            . f d d f e e f d d b f f e f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . . f d d f d d e e f f . . . . 
            . c d d d f d d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c f f f f d d d e e f c f . . . 
            . f b d f f f e e e e f . . . . 
            . f d d f e f f f e e f . . . . 
            . . f f f e e e e f f f . f f . 
            . . f e e f e e e e f f . e f . 
            . f f e e e f f f f f f f e f . 
            . f b d f e e f b b f f f e f . 
            . f d d f f e e d d b f f f f . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(enemigofinal, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile0`)) {
        enemigofinal = sprites.create(img`
            . . . . f f f f f . . . . . . . 
            . . . f 9 9 9 9 9 f . . . . . . 
            . . f 6 c 6 6 c 9 9 f . . . . . 
            . c 6 f 6 6 f 6 9 9 f f . . . . 
            . c 6 f 6 6 f 6 9 9 6 6 f . . . 
            c 6 9 9 6 6 6 6 9 9 3 6 c . . . 
            c 6 6 6 6 6 6 6 9 9 3 6 c . f f 
            c c c c c 6 6 6 9 9 f c . f 9 f 
            . f 6 6 6 c 6 9 9 f f . . f 9 f 
            . . f f f f f 9 9 9 9 f . f 9 f 
            . . . . f 9 9 9 9 9 9 9 f f 9 f 
            . . . f 9 f f 9 f 9 9 9 9 f f . 
            . . . f 9 f f 9 f 9 9 9 9 f . . 
            . . . f 6 3 f 6 3 f f 9 f . . . 
            . . . f 6 6 3 6 6 3 3 6 f . . . 
            . . . . f f f f f f f f f . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        enemigofinal,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f 9 9 9 9 9 f . . . . . . 
            . . f 6 c 6 6 c 9 9 f . . . . . 
            . c 6 f 6 6 f 6 9 9 f f . . . . 
            . c 6 f 6 6 f 6 9 9 6 6 f . . . 
            c 6 9 9 6 6 6 6 9 9 3 6 c . . . 
            c 6 6 6 6 6 6 6 9 9 3 6 c . . . 
            c c c c c 6 6 9 9 9 f c . . . . 
            . f 6 6 6 c 6 9 9 f f . . . . . 
            . . f f f f f 9 9 9 9 f . . . . 
            . . . . f f 9 9 9 9 9 9 f . f f 
            . . . f 9 9 f 9 9 f 9 9 f . 9 f 
            . . f 9 9 f 9 9 f 9 9 9 f . 9 f 
            . f 3 6 f 6 3 f 3 3 f 9 f f 9 f 
            . f 6 6 f 6 6 f 6 6 3 9 f f f f 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f 9 9 9 9 9 f . . . . . . 
            . . f 6 6 6 6 9 9 9 f . . . . . 
            . c 6 f 6 6 f 6 9 9 f f . . . . 
            . c 6 f 6 6 f 6 9 9 6 6 f . . . 
            c 6 9 9 6 6 6 6 9 9 3 6 c . . . 
            c 6 6 6 6 6 6 6 9 9 3 6 c . . . 
            c c c c c 6 6 9 9 9 f c . . . . 
            . f 6 6 6 6 9 9 9 f f . . . . . 
            . . f 9 9 9 f f 9 9 9 f . . . . 
            . . f f f f f 9 9 9 9 9 f . f f 
            . . f 6 3 f 9 9 f f 9 9 f . 9 f 
            . f f 6 6 f 9 f f 9 9 9 f . 9 f 
            . f f f f f f 9 3 3 f 9 f f 9 f 
            . f 6 6 f 9 9 9 6 6 3 9 f f f f 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . f f f f f . . . . . . 
            . . . . f 9 9 9 9 9 f . . . . . 
            . . . f 6 6 6 6 6 9 9 f . . . . 
            . . f f f 6 6 f f 6 9 f f . . . 
            . c 6 6 9 9 6 6 6 6 9 6 6 f . . 
            . c 6 6 6 6 6 6 6 6 9 6 f f f . 
            . c 6 c c c c 6 6 6 9 6 f 3 6 f 
            . . c 6 6 6 6 6 6 9 9 f f 6 6 f 
            . . . c 6 6 6 6 9 9 f f 9 f f f 
            . . . . f f f 9 9 f 9 9 9 f . . 
            . . . . f 9 9 9 9 9 9 9 f f f . 
            . . . f 9 9 9 9 9 9 f f f 9 f . 
            . . f f 9 9 9 9 f f f f f 9 f . 
            . f 3 6 f 9 9 f 3 3 f f f 9 f . 
            . f 6 6 f 9 9 f 6 6 3 f f f f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f 9 9 9 9 9 f . . . . . . 
            . . f 6 6 6 6 9 9 9 f . . . . . 
            . . f 6 6 6 6 6 9 9 f f . . . . 
            . c 6 6 6 f f 6 9 9 6 6 f . . . 
            c 6 9 9 6 6 6 6 9 9 3 6 c . . . 
            c f f 6 6 c 6 6 9 9 3 6 c . . . 
            f 6 6 f 9 f f f 9 9 9 f . . . . 
            f 6 6 f 9 9 9 f f f f f . . . . 
            f f f f f 9 9 9 9 9 f f . f f . 
            . f f f 9 f f 9 9 9 f f . 9 f . 
            . f 3 6 f 9 f f 3 3 f f f 9 f . 
            . f 6 6 f 9 9 f 6 6 3 f f 9 f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f 9 9 9 9 9 f . . . . . . 
            . . f 6 6 6 6 9 9 9 f . . . . . 
            . . f 6 6 f 6 6 9 9 f f . . . . 
            . c 6 6 6 f 6 6 9 9 6 6 f . . . 
            c 6 9 9 6 6 6 6 9 9 3 6 c . . . 
            c 6 6 6 6 c 6 6 9 9 3 6 c . . . 
            c f f f f 6 6 6 9 9 f c f . . . 
            . f 3 6 f f f 9 9 9 9 f . . . . 
            . f 6 6 f 9 f f f 9 9 f . . . . 
            . . f f f 9 9 9 9 f f f . f f . 
            . . f 9 9 f 9 9 9 9 f f . 9 f . 
            . f f 9 9 9 f f f f f f f 9 f . 
            . f 3 6 f 9 9 f 3 3 f f f 9 f . 
            . f 6 6 f f 9 9 6 6 3 f f f f . 
            . f f f f f f f f f f f f f . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(enemigofinal, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.down.isPressed()) {
        otherSprite.destroy()
    } else if (controller.up.isPressed()) {
        otherSprite.destroy()
    } else {
        info.changeLifeBy(-1)
        otherSprite.destroy()
    }
})
let enemigofinal: Sprite = null
let enemigo: Sprite = null
let VIDITA_EXT: Sprite = null
let hero: Sprite = null
hero = sprites.create(img`
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
    `, SpriteKind.Player)
hero.ay = 1500
scene.cameraFollowSprite(hero)
controller.moveSprite(hero, 80, 0)
info.setLife(3)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
let idle = animation.createAnimation(ActionKind.Idle, 500)
let walkig = animation.createAnimation(ActionKind.Walking, 450)
let walking2 = animation.createAnimation(ActionKind.Walking2, 450)
let ataque = animation.createAnimation(ActionKind.Ataque, 450)
let ataque2 = animation.createAnimation(ActionKind.Ataque2, 450)
idle.addAnimationFrame(img`
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
    `)
idle.addAnimationFrame(img`
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
    ..ffffddddeef...........
    .fddddf44eef............
    .fbbbbf222f4e...........
    .fbbbbf222fd4...........
    ..fccf4544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
walkig.addAnimationFrame(img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee............
    ...f2222e2f.............
    ...f444455f.............
    ....ffffff..............
    .....fff................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
walkig.addAnimationFrame(img`
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
    `)
walking2.addAnimationFrame(img`
    ..............ffffff....
    .............f2feeeeff..
    ............f222feeeeff.
    .......cc...feeeeffeeef.
    .......cdc.fe2222eeffff.
    .......cddcf2effff222ef.
    ........cddcffeeefffffff
    .........cddce44fbe44eff
    ..........cdceddf14d4eef
    ..........cccdeddd4eeef.
    ...........edd4e44eeff..
    ............ee442222f...
    .............f2e2222f...
    .............f554444f...
    ..............ffffff....
    ................fff.....
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
walking2.addAnimationFrame(img`
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
    `)
ataque.addAnimationFrame(img`
    ........................
    .......fff..............
    ....fffff2f.............
    ..ffeeeee22ff...........
    .ffeeeeee222ff..........
    .feeeefffeeeef..........
    .fffffeee2222ef.....2222
    fffe222fffffe2f........2
    fffffffffeeefff.....cc.2
    fefe44ebbf44eef...ccdc.2
    .fee4d4bbfddef..ccddcc..
    ..feee4dddddfeecdddc....
    ...f2222222eeddcdcc.....
    ...f444445e44ddccc......
    ...ffffffffeeee.........
    ...fff...ff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
ataque.addAnimationFrame(img`
    .......ff...............
    ....ffff2ff.............
    ..ffeeeef2ff............
    .ffeeeeef22ff...........
    .feeeeffeeeef...........
    .fffffee2222ef..........
    fffe222ffffe2f..........
    ffffffffeeefff..........
    fefe44ebf44eef..........
    .fee4d4bfddef.......2...
    ..feee4dddee.c......22..
    ...f2222eeddeccccccc222.
    ...f444e44ddecddddd.2222
    ...fffffeeee.ccccc..222.
    ..ffffffff...c......22..
    ..fff..ff...........2...
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
ataque2.addAnimationFrame(img`
    ........................
    ..............fff.......
    .............f2fffff....
    ...........ff22eeeeeff..
    ..........ff222eeeeeeff.
    22222.....feeeefffeeeef.
    2........fe2222eeefffff.
    2........f2efffff222efff
    2.cc.....fffeeefffffffff
    2.cdcc...fee44fbbe44efef
    2.ccddcc..feddfbb4d4eef.
    ....cdddceefddddd4eeef..
    .....ccdcddee2222222f...
    ......cccdd44e544444f...
    .........eeeeffffffff...
    .............ff...fff...
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
ataque2.addAnimationFrame(img`
    ...............ff.......
    .............ff2ffff....
    ............ff2feeeeff..
    ...........ff22feeeeeff.
    ...........feeeeffeeeef.
    ..........fe2222eefffff.
    ..........f2effff222efff
    ..........fffeeeffffffff
    ..........fee44fbe44efef
    ...2.......feddfb4d4eef.
    ..22......c.eeddd4eeef..
    .222ccccccceddee2222f...
    2222.dddddcedd44e444f...
    .222..ccccc.eeeefffff...
    ..22......c...ffffffff..
    ...2...........ff..fff..
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
animation.attachAnimation(hero, idle)
animation.attachAnimation(hero, walkig)
animation.attachAnimation(hero, walking2)
animation.attachAnimation(hero, ataque)
animation.attachAnimation(hero, ataque2)
for (let value2 of tiles.getTilesByType(assets.tile`myTile5`)) {
    VIDITA_EXT = sprites.create(img`
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
        `, SpriteKind.Player)
    animation.runImageAnimation(
    VIDITA_EXT,
    [img`
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
        `],
    500,
    true
    )
    tiles.placeOnTile(VIDITA_EXT, value2)
    tiles.setTileAt(value2, assets.tile`transparency16`)
}
for (let value2 of tiles.getTilesByType(assets.tile`myTile`)) {
    enemigo = sprites.create(img`
        . . . . . c c c c c c c . . . . 
        . . . . c 6 7 7 7 7 7 6 c . . . 
        . . . c 7 c 6 6 6 6 c 7 6 c . . 
        . . c 6 7 6 f 6 6 f 6 7 7 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 8 1 f f 1 6 7 7 7 f . . 
        . . f 6 f 1 f f 1 f 7 7 7 f . . 
        . . . f f 2 2 2 2 f 7 7 6 f . . 
        . . c c f 2 2 2 2 7 7 6 f c . . 
        . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 1 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    enemigo,
    [img`
        . . . . . c c c c c c c . . . . 
        . . . . c 6 7 7 7 7 7 6 c . . . 
        . . . c 7 c 6 6 6 6 c 7 6 c . . 
        . . c 6 7 6 f 6 6 f 6 7 7 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 8 1 f f 1 6 7 7 7 f . . 
        . . f 6 f 1 f f 1 f 7 7 7 f . . 
        . . . f f 2 2 2 2 f 7 7 6 f . . 
        . . c c f 2 2 2 2 7 7 6 f c . . 
        . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 1 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . c c c c c c c . . . 
        . . . . . c f f 6 6 f f 7 c . . 
        . . . . c 7 6 6 6 6 6 6 7 6 c . 
        . . . c 7 7 7 7 7 7 7 7 7 7 c . 
        . . . c 7 8 1 f f 1 6 7 7 7 c . 
        . . . f 6 f 1 f f 1 f 7 7 7 f . 
        . . . f 6 f 2 2 2 2 f 7 7 7 f . 
        . . c c 6 f 2 2 2 2 f 7 7 6 f . 
        . c 7 7 7 7 2 2 2 2 7 7 f c . . 
        c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
        f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
        f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 6 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . c c c c c c c . . . 
        . . . . . c f f 6 6 f f 7 c . . 
        . . . . c 7 6 6 6 6 6 6 7 6 c . 
        . . . c 7 7 7 7 7 7 7 7 7 7 c . 
        . . . c 7 8 1 f f 1 6 7 7 7 c . 
        . . . f 6 f 1 f f 1 f 7 7 7 f . 
        . . . f 6 f 2 2 2 2 f 7 7 7 f . 
        . . c c 6 f 2 2 2 2 f 7 7 6 f . 
        . c 7 7 7 7 2 2 2 2 7 7 f c . . 
        c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
        f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
        f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 6 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . c c c c c c 6 6 6 c c . . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `],
    200,
    true
    )
    tiles.placeOnTile(enemigo, value2)
    tiles.setTileAt(value2, assets.tile`transparency16`)
}
game.onUpdate(function () {
    if (hero.vx > 0) {
        animation.setAction(hero, ActionKind.Walking)
    } else if (hero.vx < 0) {
        animation.setAction(hero, ActionKind.Walking2)
    } else if (controller.down.isPressed()) {
        animation.stopAnimation(animation.AnimationTypes.All, hero)
        animation.setAction(hero, ActionKind.Ataque)
    } else if (controller.up.isPressed()) {
        animation.stopAnimation(animation.AnimationTypes.All, hero)
        animation.setAction(hero, ActionKind.Ataque2)
    } else {
        animation.setAction(hero, ActionKind.Idle)
    }
})
