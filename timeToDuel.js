
class Card{
constructor(name, cost){
this.name = name;
this.cost = cost;
}
}
// ////////////////////////////


class Unit extends Card{
constructor(name, cost, power, resilience){
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
}
showStats(){
    console.log(`Name: ${this.name}\nCost: ${this.cost}\nPower: ${this.power}\nResilience: ${this.resilience}`);
}
attack(target){
    if(target instanceof Unit){
        target.resilience -= this.power;
        console.log(`${this.name} attacked ${target.name}`)
    }
    else{
        throw new Error("Target must be a unit");
    }
}
}
///////////////////////////////////


class Effect extends Card{
constructor(name, cost, stat, magnitude){
    super(name, cost);
    this.stat = stat;
    this.magnitude = magnitude;
    magnitude > 0?
        this.text = `Increase target's ${this.stat} by ${this.magnitude}`:
        this.text = `Reduce target's ${this.stat} by ${Math.abs(this.magnitude)}`
}
showStats(){
    console.log(`Name: ${this.name}\nCost: ${this.cost}\nText: ${this.text}\nStat: ${this.stat}\nMagnitude: ${this.magnitude}`);
}
play(target){
    if(target instanceof Unit){
        if(this.stat == "resilience"){
            target.resilience += this.magnitude;
            console.log(`${this.name} played on ${target.name}`)
        }
        else if(this.stat == "power"){
            target.power += this.magnitude;
            console.log(`${this.name} played on ${target.name}`)
        }
    }
    else{
        throw new Error("Target must be a unit");
    }
}
}

////////////////////////////////////////
const unit1 = new Unit("Red Belt Ninja", 3, 3, 4);
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);

const effect1 = new Effect("Hard Algorithm", 2, "resilience", 3)
const effect2 = new Effect("Unhandled Promise Rejection", 1, "resilience", -2)
const effect3 = new Effect("Pair Programming", 2, "power", 2)
////////////////////////////////////////////////////////////////



// effect1.play(unit1);
// unit1.showStats();

// effect2.play(unit1);
// unit1.showStats();

// effect3.play(unit1);
// unit1.showStats();

// unit1.attack(unit2);
// unit2.showStats();

unit2.attack(unit1);
unit1.showStats();