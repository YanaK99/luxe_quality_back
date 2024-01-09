"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentModule = void 0;
const common_1 = require("@nestjs/common");
const rent_service_1 = require("./rent.service");
const rent_repository_1 = require("./rent.repository");
const rent_controller_1 = require("./rent.controller");
const mongoose_1 = require("@nestjs/mongoose");
const rent_schema_1 = require("./schemas/rent.schema");
const config_1 = require("@nestjs/config");
let RentModule = class RentModule {
};
exports.RentModule = RentModule;
exports.RentModule = RentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: rent_schema_1.Rent.name, schema: rent_schema_1.RentSchema }]),
            config_1.ConfigModule.forRoot(),
        ],
        providers: [rent_service_1.RentService, rent_repository_1.RentRepository],
        controllers: [rent_controller_1.RentController],
    })
], RentModule);
//# sourceMappingURL=rent.module.js.map