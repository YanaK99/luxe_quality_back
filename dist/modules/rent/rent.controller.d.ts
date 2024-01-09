import { RentService } from './rent.service';
import { RentDAO } from 'src/types/RentDAO';
import { Rent } from 'src/types/Rent';
export declare class RentController {
    private readonly rentService;
    constructor(rentService: RentService);
    rents(limit?: number, skip?: number): Promise<Rent[]>;
    rent(rentId: string): Promise<Rent>;
    createRent(newRent: RentDAO): Promise<Rent>;
}
