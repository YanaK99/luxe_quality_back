import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Rent {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  photo: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  region: string;
}

export const RentSchema = SchemaFactory.createForClass(Rent);

export type RentDocument = Rent & Document;
