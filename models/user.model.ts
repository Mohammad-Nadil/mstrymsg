import mongoose, { Schema, Document } from "mongoose";
import { Message, messageSchema } from "./message.model";

export interface User extends Document {
  userName: string;
  email: string;
  password: string;
  verifyCode: string;
  isVerified: boolean;
  isAcceptingMessages: boolean;
  messages: Message[];
}

const userSchema = new Schema<User>({
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verifyCode: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },
  messages: [messageSchema],
});

const User =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", userSchema);

export default User;
