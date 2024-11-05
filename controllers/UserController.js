import User from "../Model/UserModel.js"

export const create =  async (req, res) => {
    try{

        const userData = new User(req.body);
        const  {email} = userData;

        const userExist = await User.findOne({email})
        if (userExist){
            res.status(400).json({message: 'User Already Exist.'});
        }

        const savedUser = await userData.save();
        return res.status(200).json(savedUser);

    } catch (error){
        return res.status(500).json({error: "Internal Server Error"});
    }
}




export const fetch = async (req, res)=>{
    try{
         const users = await  User.find();
         if(users.length === 0){
            return res.status(404).json({message: 'User not  Found.'});
         }
          res.status(200).json(users);

    } catch (errror){
        res.status(500).json({error: "Internal Server Error"});
    }
}


export const update = async (req, res)=>{
    try{
         const id  = req.params.id;
         const UserExist =  await User.findOne({_id:id});
         if(!UserExist){
            return res.status(404).json({message: 'User not  Found.'});
         }

         const updateUser = await  User.findByIdAndUpdate(id, req.body, {new: true});
         res.status(201).json(updateUser);

    } catch (errror){
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const deleteUser = async (req, res)=>{
    try{
         const id  = req.params.id;
         const UserExist =  await User.findById({ _id:id });
         if(!UserExist){
            return res.status(404).json({message: 'User not  Found.'});
         }

         res.status(201).json(deleteUser);

    } catch (errror){
        res.status(500).json({error: "Internal Server Error"});
    }
}