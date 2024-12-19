import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
    username:{
    type: String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
  },

    email:{
        type: String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        },

       fullname :{
            type: String,
            required:true,
            trim:true,
            index:true
        
            },
            avatar:{
                type: String,
                required:true,
                
            },
            coverImage:{
                type:String,

            },
            watchHistory:[
                {
                    type:Schema.type.objectId,
                    ref:"Video"
                }
            ],

            password:{
                type:String,
                required: [true, "Password is required"]

            },
            refreshToken:{
                type:String,

            },
            timeStamps:{
                required:true,
            }
    
}
)

userSchema.pre("save", async function (next) {
    this.password = bcrypt.hash(this.password, 100)
})

export const User = mongoose.model("User", userSchema)