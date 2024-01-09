"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const rent_schema_1 = require("./schemas/rent.schema");
const mongoose_2 = require("mongoose");
const config_1 = require("@nestjs/config");
let RentRepository = class RentRepository {
    constructor(rentModel, configService) {
        this.rentModel = rentModel;
        this.configService = configService;
    }
    async rents(limit, skip) {
        return await this.rentModel
            .find()
            .limit(limit)
            .skip(skip ? skip : 0);
    }
    async rent(rentId) {
        return await this.rentModel.findById(rentId);
    }
    async createRent(newRent) {
        const createdRent = new this.rentModel({
            ...newRent,
        });
        return createdRent.save();
    }
};
exports.RentRepository = RentRepository;
exports.RentRepository = RentRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(rent_schema_1.Rent.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        config_1.ConfigService])
], RentRepository);
//# sourceMappingURL=rent.repository.js.map