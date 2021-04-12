export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    constructor(name: string, orbitType: string, type: string, launchDate: string, operational: boolean) {
        this.name=name,
        this.orbitType=orbitType,
        this.type=type,
        this.launchDate=launchDate,
        this.operational=operational
    }
}