import prismaClient from "../../prisma";

interface UpdateRequest{
    user_id:string;
    name:string;
    adress:string 
    
}
class UpdateUserService{
    async execute({user_id,  name ,adress} : UpdateRequest){
        
            try{
                const userExists = await prismaClient.user.findFirst({
                    where:{
                        id:user_id
                    }
                })

                if(!userExists){
                    throw new Error("User Doesn't exist!")
                }

                const userUpdate = await prismaClient.user.update({
                    where:{
                        id:user_id
                    },
                    data:{
                        name: name,
                        adress: adress
                    },
                    select:{
                        name:true,
                        email:true,
                        adress:true
                    }
                })

                return (userUpdate) 
            }catch(err){
                throw new Error("Error an update user!")
            }
    }
}

export {UpdateUserService}