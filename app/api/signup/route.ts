import dbConnect from "@/database/database";
import User from "@/models/user.model";
// import bcrypt from "bcrypt";
import {sendVerificationEmail} from "@/helpers/sendVerificationMail";

export async function POST(request:Request){
    await dbConnect();     
    try {

        const {name, email, password} = await request.json();
        const user = await User.findOne({email});
        if(user){
            return {success: false, message: "User already exists"};
        }
        const newUser = new User({name, email, password});
        await newUser.save();
        await sendVerificationEmail(email, name, "123456");
        return {success: true, message: "User created successfully"}
        
    } catch (error) {
        console.error("Error sending email:", error)
        return { success: false, message: "Error sending email" };
        
    }
    
}