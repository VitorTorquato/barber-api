import prismaClient from "../../prisma";

interface CreateHairCutRequest{
    user_id:string;
    name: string;
    price: number
}

//verify how many models he has
//verify if the user is premium to limit how many models he can register max 3
class createHaircutService{
    async execute({user_id,name,price}:CreateHairCutRequest){
            if(!name || !price){
                throw new Error("Error")
            }

            const myHaircuts = await prismaClient.haircut.count({
                where:{
                    user_id : user_id
                }
            })

            const user = await prismaClient.user.findFirst({
                where:{
                    id:user_id
                },
                include:{
                    subscriptions: true,
                }
            })

            //validation
            if(myHaircuts >= 3 && user?.subscriptions?.status !== 'active'){
                    throw new Error("Not Authorized!")
            }


            const haircut = await prismaClient.haircut.create({
                data:{
                    name:name,
                    price:price,
                    user_id:user_id
                }
            })

            return haircut;
    }
}

export {createHaircutService}