import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Rent as RentSchema, RentDocument } from './schemas/rent.schema';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { RentDAO } from 'src/types/RentDAO';
import { Rent } from 'src/types/Rent';

@Injectable()
export class RentRepository {
  constructor(
    @InjectModel(RentSchema.name) private rentModel: Model<RentDocument>,
    private configService: ConfigService,
  ) { }

  async rents(limit?: number, skip?: number): Promise<Rent[]> {
    return await this.rentModel
      .find()
      .limit(limit)
      .skip(skip ? skip : 0);
  }

  async rent(rentId: string): Promise<Rent> {
    return await this.rentModel.findById(rentId);
  }

  async createRent(newRent: RentDAO): Promise<Rent> {
    const createdRent = new this.rentModel({
      ...newRent,
    });
    return createdRent.save();
  }
}
