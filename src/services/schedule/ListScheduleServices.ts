import prismaClient from "../../prisma";

interface ListScheduleRequest{
    user_id:string
}

class ListScheduleServices{
    async execute({user_id}: ListScheduleRequest){

        const schedule = await  prismaClient.service.findMany({
            where:{
                user_id:user_id
            },
            select:{
                id:true,
                customer:true,
                haircuts:true
            }
        })

        return schedule;
    }
}

export { ListScheduleServices}