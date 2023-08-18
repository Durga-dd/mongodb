import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  name: User;
  @Prop()
  description: string;
  @Prop()
  price: number;
  @Prop()
  category: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
