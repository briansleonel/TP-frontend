import { Person } from "./person";

export class Passage {
    _id: string;
    precioPasaje: number;
    categoriaPasajero: string;  //m = Menor, a = Adulto, j= Jubilado
    fechaCompra: string;
    pasajero: Person;
}
