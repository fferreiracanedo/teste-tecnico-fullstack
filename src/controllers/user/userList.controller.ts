import { Request, Response } from "express";
import listUserService from "../../services/user/listUser.service";

const userListController = async (request: Request, response: Response) => {

  const userRetrieve = await listUserService()


  return response.status(200).json(userRetrieve)

}

export default userListController