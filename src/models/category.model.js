import { model, Schema } from "mongoose";

const categorySchema = new Schema (
    {
        name:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            minlength:2,
            maxlength:200,
        },
        description:{
            type:String,
            trim:true,
            maxlength:200,
        },
    },
    {
        timestamps: true,
        versionKey:false,
        toJSON: {virtuals: true},
        toObject:{virtuals:true},
    }
);

categorySchema.virtual("events",{
    ref:"Event",
    localField:"_id",
    foreignField:"categories",
});

export const CategoryModel = model("Category",categorySchema);