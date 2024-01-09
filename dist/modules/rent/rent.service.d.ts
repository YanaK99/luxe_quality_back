import { RentRepository } from './rent.repository';
import { RentDAO } from 'src/types/RentDAO';
import { Rent } from 'src/types/Rent';
export declare class RentService {
    private rentRepository;
    constructor(rentRepository: RentRepository);
    rents(limit?: number, skip?: number): Promise<Rent[]>;
    rent(rentId: string): Promise<Rent>;
    createRent(newRent: RentDAO): Promise<Rent>;
}
