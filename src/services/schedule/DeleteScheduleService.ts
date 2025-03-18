import prismaClient from "../../prisma";

interface DeleteScheduleRequest{
    service_id: string;
    user_id: string
}

class DeleteScheduleService{
    async execute({service_id , user_id}:DeleteScheduleRequest){

        if(service_id === '' || user_id === ''){
            throw new Error("Error");
        }

        try{

            const belongsToUser = await prismaClient.service.findFirst({
                where:{
                    id:service_id,
                    user_id: user_id,
                }
            })

            if(!belongsToUser){
                throw new Error("Not authorized!")
            }

            await prismaClient.service.delete({
                where:{
                    id:service_id
                }
            })
    
            return {message: "Service finished successfully!"};

        }catch(err){
            throw new Error("Error to finish service!")
        }

      
    }
}

export {DeleteScheduleService}