import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    //embebido user - profile
    profile: {
      firstName: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 50,
      },
      lastName: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 50,
      },
      birthDate: {
        type: Date,
      },
      phone: {
        type: String,
        trim: true,
      },
    },
    //estado para la eliminación lógica
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//Virtual populate
userSchema.virtual("events", {
    ref:"Event",
    localField: "_id",
    foreignField:"organizer",
});

export const UserModel = model("User", userSchema);