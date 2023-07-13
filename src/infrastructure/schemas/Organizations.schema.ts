import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { OrganizationEntity } from "src/domain/Entities/Organization.entity";

@Schema()
export class Organizations implements OrganizationEntity {
    @Prop({
        type: String,
        required: true
    })
    name: string;

    @Prop({
        type: String,
        required: true
    })
    description: string;
}

export type OrganizationDocument = Organizations & Document;

export const OrganizationSchema = SchemaFactory.createForClass(Organizations);