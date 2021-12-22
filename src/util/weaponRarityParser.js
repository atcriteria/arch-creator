// Used to update static values on the weapon form

// Base values are set for one-handed weapons
// two-handed weapons multiply by 1.75
// A modifier can be applied to these values in the form

export default function weaponRarityParser(rarity){
    switch(rarity){
        case 1:
            return baseValues[0];
        case 2:
            return baseValues[1];
        case 3:
            return baseValues[2];
        case 4:
            return baseValues[3];
        default:
            return baseValues[0];
    }
}

const baseValues = [
    {
        rarity: 1,
        durability: 1000,
        value: 500,
        weight: 3,
    },
    {
        rarity: 2,
        durability: 1800,
        value: 2500,
        weight: 5,
    },
    {
        rarity: 3,
        durability: 2400,
        value: 5000,
        weight: 7,
    },
    {
        rarity: 4,
        durability: 3250,
        value: 9500,
        weight: 9,
    },
]