import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { CatEntity, CatStatus } from "src/domain/Entities/Cat.entity";

@Schema()
export class Cats implements CatEntity {
    @Prop({
        type: String,
        required: true
    })
    name: string;

    @Prop({
        type: Number,
        required: true
    })
    age: number;

    @Prop({
        type: String,
        required: true
    })
    color: string;

    @Prop({
        type: String,
        required: true
    })
    status: CatStatus;
}

export type CatDocument = Cats & Document;

export const CatSchema = SchemaFactory.createForClass(Cats);