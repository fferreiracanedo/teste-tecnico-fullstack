import { Router } from "express";
import listContactController from "../controllers/contacts/listContacts.controller";
import createContactController from "../controllers/contacts/createContacts.controller";
import verifyAuthToken from "../middleware/verifyAuthToken.middleware";

const contactsRouter = Router()


contactsRouter.get('/', verifyAuthToken, listContactController)
contactsRouter.post('/', createContactController)



export default contactsRouter