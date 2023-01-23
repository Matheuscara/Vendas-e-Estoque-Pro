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
exports.produtos = void 0;
const typeorm_1 = require("typeorm");
let produtos = class produtos {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], produtos.prototype, "idprodutos", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], produtos.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], produtos.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], produtos.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], produtos.prototype, "qtdMinima", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], produtos.prototype, "valorCompra", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], produtos.prototype, "valorVenda", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], produtos.prototype, "data_cadastro", void 0);
produtos = __decorate([
    (0, typeorm_1.Entity)()
], produtos);
exports.produtos = produtos;
//# sourceMappingURL=produtos.entity.js.map