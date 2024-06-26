// Index / level 0 uses the value for a level 0 warrior for all classes to avoid edge cases.
const SAVING_THROWS = {
    priest: {
        paralyzePoisonDeath: [16,10,10,10,9,9,9,7,7,7,6,6,6,5,5,5,4,4,4,2,2,2],
        rodStaffWand: [18,14,14,14,13,13,13,11,11,11,10,10,10,9,9,9,8,8,8,6,6,6],
        petrificationPolymorph: [17,13,13,13,12,12,12,10,10,10,9,9,9,8,8,8,7,7,7,5,5,5],
        breath: [20,16,16,16,15,15,15,13,13,13,12,12,12,11,11,11,10,10,10,8,8,8],
        spell: [19,15,15,15,14,14,14,12,12,12,11,11,11,10,10,10,9,9,9,7,7,7],
        fear: [14,13,13,12,12,11,11,10,10,9,9,7,7,5,5,3,3,2,2,2,2,2],
        horror: [16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,7,7,5,5,3,3,3],
        madness: [19,18,18,17,17,16,16,15,15,14,14,13,13,12,12,11,11,10,10,8,8,8],
    },
    rogue: {
        paralyzePoisonDeath: [16,13,13,13,13,12,12,12,12,11,11,11,11,10,10,10,10,9,9,9,9,8],
        rodStaffWand: [18,14,14,14,14,12,12,12,12,10,10,10,10,8,8,8,8,6,6,6,6,4],
        petrificationPolymorph: [17,12,12,12,12,11,11,11,11,10,10,10,10,9,9,9,9,8,8,8,8,7],
        breath: [20,16,16,16,16,15,15,15,15,14,14,14,14,13,13,13,13,12,12,12,12,11],
        spell: [19,15,15,15,15,13,13,13,13,11,11,11,11,9,9,9,9,7,7,7,7,5],
        fear: [16,15,15,14,14,13,13,12,12,11,11,9,9,7,7,5,5,3,3,2,2,2],
        horror: [16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,7,7,5,5,3,3,3],
        madness: [19,18,18,17,17,16,16,15,15,14,14,13,13,12,12,11,11,10,10,8,8,8],
    },
    warrior: {
        paralyzePoisonDeath: [16,14,14,13,13,11,11,10,10,8,8,7,7,5,5,4,4,3,3,3,3,3],
        rodStaffWand: [18,16,16,15,15,13,13,12,12,10,10,9,9,7,7,6,6,5,5,5,5,5],
        petrificationPolymorph: [17,15,15,14,14,12,12,11,11,9,9,8,8,6,6,5,5,4,4,4,4,4],
        breath: [20,17,17,19,19,13,13,12,12,9,9,8,8,5,5,4,4,4,4,4,4,4],
        spell: [19,17,17,16,16,14,14,13,13,11,11,10,10,8,8,7,7,6,6,6,6,6],
        fear: [13,12,12,11,11,10,10,9,9,7,7,6,6,4,4,2,2,2,2,2,2,2],
        horror: [19,18,18,17,17,16,16,15,15,14,14,13,13,12,12,10,10,8,8,6,6,6],
        madness: [19,18,18,17,17,16,16,15,15,14,14,13,13,12,12,11,11,10,10,8,8,8],
    },
    wizard: {
        paralyzePoisonDeath: [16,14,14,14,14,14,13,13,13,13,13,11,11,11,11,11,10,10,10,10,10,8],
        rodStaffWand: [18,11,11,11,11,11,9,9,9,9,9,7,7,7,7,7,5,5,5,5,5,3],
        petrificationPolymorph: [17,13,13,13,13,13,11,11,11,11,11,9,9,9,9,9,7,7,7,7,7,5],
        breath: [20,15,15,15,15,15,13,13,13,13,13,11,11,11,11,11,9,9,9,9,9,7],
        spell: [19,12,12,12,12,12,10,10,10,10,10,8,8,8,8,8,6,6,6,6,6,4],
        fear: [17,16,16,15,15,14,14,13,13,12,12,10,10,8,8,6,6,4,4,2,2,2],
        horror: [15,14,14,13,13,12,12,11,11,10,10,9,9,8,8,6,6,4,4,2,2,2],
        madness: [19,18,18,17,17,16,16,15,15,14,14,13,13,12,12,11,11,10,10,8,8,8],
    },
    psionicist: {
        paralyzePoisonDeath: [16,13,13,13,13,12,12,12,12,11,11,11,11,10,10,10,10,9,9,9,9,8],
        rodStaffWand: [18,15,15,15,15,13,13,13,13,11,11,11,11,9,9,9,9,7,7,7,7,5],
        petrificationPolymorph: [17,10,10,10,10,9,9,9,9,8,8,8,8,7,7,7,7,6,6,6,6,5],
        breath: [20,16,16,16,16,15,15,15,15,13,13,13,13,12,12,12,12,11,11,11,11,9],
        spell: [19,15,15,15,15,14,14,14,14,12,12,12,12,11,11,11,11,9,9,9,9,7],
        fear: [16,15,15,14,14,13,13,12,12,11,11,10,10,7,7,5,5,3,3,3,3,3],
        horror: [18,17,17,16,16,15,15,14,14,13,13,12,12,11,11,9,9,7,7,5,5,5],
        madness: [17,16,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,8,8,6,6,6],
    },
};