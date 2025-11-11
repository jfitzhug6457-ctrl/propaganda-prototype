// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level0":
            case "level4":return tiles.createTilemap(hex`100010000c0c0c0c04100303030f01010b040a0a010c070c04020505050801040c0c0a0a010101010402050505080404040b0a0a1003030303050505050503030303030f0205050505050505050505050505050802050505050505050505050505050508020505050505050505050505050505081106060606050505050506060606060e010404040102050505080707090b0a0a04010c0c040205050508010b0c09090a01040c0c04020505050807070c0d090a010c040c040205050508070c0b0b090a010c0c01040205050508070c0109090a0c010c01040205050508010a0a01090a0c040c0104020505050801070c09090a0c04010101110606060e010a0c0b0a0a`, img`
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
2 2 2 2 2 . . . . . 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . 2 2 2 2 2 2 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tileGrass3,sprites.castle.tilePath6,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.skillmap.islandTile4,sprites.builtin.field1,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath7], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`10001000100f0f0f0f0f0f0f0f0f0f0f0f0f0f110d14121212121212121212121212130e0d15020b05010101010101020b05190e0d15091a0c010101010101091a0c190e0d15030a04010101010101030a04190e0d15010101010101010101010101190e0d15010101010101010101010101190e0d15010101010101010101010101190e0d15010101010101010101010101190e0d15010101010101010101010101190e0d15010101010101010101010101190e0d15020b05010101010101020b05190e0d15091b0c010101010101091b0c190e0d15030a04010101010101030a04190e0d16171717171717171717171717180e06070707070707070707070707070708`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.stairNorth,sprites.dungeon.stairSouth], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100009090909040c0303030b01010404010101090709040205050508010409090401010101010402050505080404040707070c03030303050505050503030303030b0205050505050505050505050505050802050505050505050505050505050508020505050505050505050505050505080d06060606050505050506060606060a0104040401020505050807070701010704010909040205050508010404040401010409090402050505080707010401040109040904020505050807090404040101090901040205050508070904040401090109010402050505080104040401010904090104020505050801010904010409040101010d0606060a010409040404`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.castle.tilePath8,sprites.castle.tileGrass3,sprites.castle.tilePath6,sprites.skillmap.islandTile4,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath7], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100003030303030307070707030303030303030202020202010101010202020204030302020202020101010102020202020303020202020201010101020202020203030202020202010101010202020202030302020202020101010102020202020306010101010101010101010101010103060101010101010101010101010101030601010101010101010101010101010306010101010101010101010101010103030202020202010101010505050505030302020202020101010105020202020303020202020201010101050202020203030202020202010101010502020202030302020202020101010105020202020303030303030308080808030303030303`, img`
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileDarkGrass3,sprites.builtin.brick,sprites.dungeon.collectibleInsignia,sprites.castle.tileDarkGrass1,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath8], TileScale.Sixteen);
            case "level6":
            case "level6":return tiles.createTilemap(hex`100010000f04040e04100e04040e10100e10100511010101010106010101010101010106110103010101060101010101010301060d01010101010601010101010101010b07010909090914010108090909010112070101011101010101060101010101120d01060111011101010601010101010b110106010101110101060106010a0a06110a0a0a0a0a0a0101060106010101060d01010107010101010101060101010b1101070101010701010101060a0a0112070404040404040404050106010101120d0101010106010101060106010a0a121101010701060107010601060102010611020107010101070101010601010106130a0a0a0c0a090a0c0909090c090a14`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . 2 2 2 2 2 . . 2 2 2 2 . . 2 
2 . . . 2 . . . . 2 . . . . . 2 
2 . 2 . 2 . 2 . . 2 . . . . . 2 
2 . 2 . . . 2 . . 2 . 2 . 2 2 2 
2 2 2 2 2 2 2 . . 2 . 2 . . . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . 2 . . . 2 . . . . 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 . 2 . . . 2 
2 . . . . 2 . . . 2 . 2 . 2 2 2 
2 . . 2 . 2 . 2 . 2 . 2 . . . 2 
2 . . 2 . . . 2 . . . 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.doorOpenNorth,sprites.dungeon.doorOpenSouth,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest], TileScale.Sixteen);
            case "level8":
            case "level8":return tiles.createTilemap(hex`1000100001010202020605050605050601010101070404040406050506050506030303010704040404060505060505060103010107040203010605050605050604030101070104010306050506050506030301030701020404060505060505060303030407040101030605050605050603030104070404040306050506050506010301040704010404060505060505060103010407040104030605050605050603030104070401040306050506050506010301040704040404060505060505060103010407010104040605050605050604030402070304010106050506050506020401020704010104060505060505060203020207010101010605050605050601010301`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.skillmap.islandTile4,sprites.vehicle.roadVertical,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
