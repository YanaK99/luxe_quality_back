import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { RentService } from './rent.service';
import { RentDAO } from 'src/types/RentDAO';
import { Rent } from 'src/types/Rent';

@Controller('rents')
export class RentController {
  constructor(private readonly rentService: RentService) { }

  @Get()
  rents(
    @Query('limit') limit?: number,
    @Query('skip') skip?: number,
  ): Promise<Rent[]> {
    return this.rentService.rents(limit, skip);
  }

  @Get('/:id')
  rent(@Param('id') rentId: string): Promise<Rent> {
    return this.rentService.rent(rentId);
  }

  @Post()
  createRent(@Body() newRent: RentDAO): Promise<Rent> {
    return this.rentService.createRent(newRent);
  }
}
