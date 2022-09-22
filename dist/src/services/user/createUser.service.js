"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const script_1 = require("../../prisma/script");
const createUserService = (name, email, tel) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield script_1.prisma.user.create({
        data: {
            name: name,
            email: email,
            tel: tel,
            accountCreated: new Date(),
        }
    });
    return user;
});
exports.default = createUserService;
//# sourceMappingURL=createUser.service.js.map