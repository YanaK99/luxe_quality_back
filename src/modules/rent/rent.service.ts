import { Injectable } from '@nestjs/common';
import { RentRepository } from './rent.repository';
import { RentDAO } from 'src/types/RentDAO';
import { Rent } from 'src/types/Rent';

@Injectable()
export class RentService {
  constructor(private rentRepository: RentRepository) { }

  async rents(limit?: number, skip?: number): Promise<Rent[]> {
    return this.rentRepository.rents(limit, skip);
  }

  async rent(rentId: string): Promise<Rent> {
    return this.rentRepository.rent(rentId);
  }

  async createRent(newRent: RentDAO): Promise<Rent> {
    return this.rentRepository.createRent(newRent);
  }
}
