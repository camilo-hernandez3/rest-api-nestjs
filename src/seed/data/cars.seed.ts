import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    modelo: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    modelo: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    modelo: 'Cherokee',
  },
];
