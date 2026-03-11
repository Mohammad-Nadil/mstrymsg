import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  contend: string;
  createdAt: Date;
}

export const messageSchema = new Schema<Message>({
  contend: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
});

const Message =
  (mongoose.models.Message as mongoose.Model<Message>) ||
  mongoose.model<Message>("Message", messageSchema);
export default Message;
