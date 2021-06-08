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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Fighters = /** @class */ (function () {
    function Fighters() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Fighters.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Fighters.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Fighters.prototype, "idade", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Fighters.prototype, "peso", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Fighters.prototype, "altura", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Fighters.prototype, "vitorias", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Fighters.prototype, "derrotas", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Fighters.prototype, "empates", void 0);
    Fighters = __decorate([
        typeorm_1.Entity('FightPlayer')
    ], Fighters);
    return Fighters;
}());
exports.default = Fighters;
