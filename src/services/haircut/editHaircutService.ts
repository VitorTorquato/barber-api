import prismaClient from "../../prisma"

interface EditHaircutRequest{
    user_id:string;
    haircut_id:string;
    name:string;
    price:number;
    status: boolean | string
}

class EditHaircutService{
    async execute({user_id,haircut_id, name,price, status = true}: EditHaircutRequest){

        const user = await prismaClient.user.findFirst({
            where:{
                id:user_id
            },
            include:{
                subscriptions:true
            }
        })

        if(user?.subscriptions.status !== 'active'){
            throw new Error("Not Authorized!")
        }

        const haircut = await prismaClient.haircut.update({
            where:{
             id: haircut_id
            },
            data:{
                name:name,
                price:price,
                status: status === true ? true : false
            }
        })

        return haircut;
    }
}

export {EditHaircutService}