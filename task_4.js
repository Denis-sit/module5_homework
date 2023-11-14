// Задание 4

function ElectricalAppliance(name, electricityConsumed){
    this.name = name,
    this.electricityConsumed = electricityConsumed,
    this.switchingTheSwitch = function( condition){
        if(condition){
            console.log(`${this.name} включено и потребляет ${this.electricityConsumed} кВт*ч `);
        }else{
            console.log(`${this.name} выключено и  не потребляет энергию`);
        }

        return condition ? this.electricityConsumed : 0;
    }
};

function Laptop(name, electricityConsumed, screen){
    this.name = name,
    this.electricityConsumed = electricityConsumed,
    this.screen = screen,
    this.displaysTheCharacteristicsOfTheMonitor =  function(){console.log(`Размер монитора ${this.screen}`);}
}

function Luminaire(name, electricityConsumed){
    this.name = name,
    this.electricityConsumed = electricityConsumed
}

Laptop.prototype = new ElectricalAppliance();
Luminaire.prototype = new ElectricalAppliance();

function weCountTheEnergyConsumed(electricalAppliance_1, electricalAppliance_2){
    return('Общее потребление энергии составляет '+ (electricalAppliance_1 + electricalAppliance_2) + 'кВт*ч');
};

const laptop = new Laptop('laptop', 3, '1920x1080px');
const luminaire = new Luminaire('luminare', 5);


let laptopEnergy = laptop.switchingTheSwitch(false);
let luminareEnergy = luminaire.switchingTheSwitch(true);

console.log(laptopEnergy);
console.log(luminareEnergy);
console.log(weCountTheEnergyConsumed(laptopEnergy, luminareEnergy));

