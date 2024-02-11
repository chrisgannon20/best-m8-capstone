import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const passcodeSchema = new Schema({
  passcode: { type: String, required: true },
});

const Passcode = model('Passcode', passcodeSchema);
export default Passcode;