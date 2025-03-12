import prismaClient from "../../prisma";
import {hash} from 'bcryptjs';

interface UserRequest{
    name: string;
    email:string;
    password: string
}

class CreateUserService{
    async execute({name,email,password}:UserRequest){

        if(!email || email === ''){
            throw new Error(" Email incorrect");
        }

        const userAlready = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlready){
            throw new Error(" User/Email already exist");
        }

        const passworHash = await hash(password , 8)

      const user = await prismaClient.user.create({
        data:{
            name:name,
            email:email,
            password:passworHash,
        },
        select:{
            id:true,
            name:true,
            email:true
        } // select it's to say what i want to return, in this case i don't want to return the password 
      }) 
     
      
      return user;
    }
}

export {CreateUserService}