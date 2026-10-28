import { model, Schema, Types } from "mongoose";

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 150,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 20,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
      min: 1,
      validate: {
        validator: Number.isInteger,
        message: "capacity debe ser un número entero",
      },
    },
    price: {
      type: Number,
      default: 0,
      min: 0,
    },
    status: {
      type: String,
      enum: ["scheduled", "cancelled", "finished"],
      default: "scheduled",
    },
    location: {
      venue: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100,
      },
      address: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 150,
      },
      city: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
      },
    },
    // uno a muchos referenciado = User a Event (organizer)
    organizer: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    //muchos a muchos referenciada = Event a Category (array de objectids)
    categories: [
      {
        type: Types.ObjectId,
        ref: "Category",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const eventModel = model("Event", eventSchema);
