import { Module } from '@nestjs/common';
import { RentService } from './rent.service';
import { RentRepository } from './rent.repository';
import { RentController } from './rent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rent, RentSchema } from './schemas/rent.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rent.name, schema: RentSchema }]),
    ConfigModule.forRoot(),
  ],
  providers: [RentService, RentRepository],
  controllers: [RentController],
})
export class RentModule {}
