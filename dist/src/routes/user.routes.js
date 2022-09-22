"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userList_controller_1 = __importDefault(require("../controllers/user/userList.controller"));
const userCreate_controller_1 = __importDefault(require("../controllers/user/userCreate.controller"));
const userRoutes = (0, express_1.Router)();
userRoutes.get('/', userList_controller_1.default);
userRoutes.post('/', userCreate_controller_1.default);
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map