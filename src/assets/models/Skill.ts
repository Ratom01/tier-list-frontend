interface Skill{
    id ?: number,
    //character ?: Character,
    name : String,
    type : String,
    active : boolean,
    description : String,
    ammo ?: number,
    reloadTime ?: number,
    cooldown ?: number
}