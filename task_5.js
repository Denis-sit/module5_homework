// Задание 5

class ElectricalAppliance{
    constructor(name, electricityConsumed){
        this.name = name,
        this.electricityConsumed = electricityConsumed;
    }

    switchingTheSwitch(condition){
        if(condition){
            console.log(`${this.name} включено и потребляет ${this.electricityConsumed} кВт*ч `);
        }else{
            console.log(`${this.name} выключено и  не потребляет энергию`);
        }

        return condition ? this.electricityConsumed : 0;
    }
};

class Laptop extends ElectricalAppliance{
    constructor(name, electricityConsumed, screen){
        super(name, electricityConsumed);
        this.screen = screen
    }

    displaysTheCharacteristicsOfTheMonitor(){console.log(`Размер монитора ${this.screen}`);}
};

class Luminaire extends ElectricalAppliance{
    constructor(name, electricityConsumed){
        super(name, electricityConsumed);
    }
};

function weCountTheEnergyConsumed(electricalAppliance_1, electricalAppliance_2){
    return('Общее потребление энергии составляет '+ (electricalAppliance_1 + electricalAppliance_2) + 'кВт*ч');
};

const laptop = new Laptop('laptop', 3, '1920x1080px');
const luminaire = new Luminaire('luminare', 5);

let laptopEnergy = laptop.switchingTheSwitch(false);
let luminareEnergy = luminaire.switchingTheSwitch(true);

console.log(weCountTheEnergyConsumed(laptopEnergy, luminareEnergy));
laptop.displaysTheCharacteristicsOfTheMonitor();