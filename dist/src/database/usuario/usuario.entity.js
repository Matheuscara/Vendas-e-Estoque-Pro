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
exports.usuario = void 0;
const relacionamento_usuarios_produtos_entity_1 = require("../usuarioProduto/relacionamento_usuarios_produtos.entity");
const typeorm_1 = require("typeorm");
let usuario = class usuario {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], usuario.prototype, "idusuarios", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], usuario.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], usuario.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], usuario.prototype, "permissao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], usuario.prototype, "data_cadastro", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => relacionamento_usuarios_produtos_entity_1.relacionamento_usuario_produto, teste => teste.usuarios),
    __metadata("design:type", Array)
], usuario.prototype, "teste", void 0);
usuario = __decorate([
    (0, typeorm_1.Entity)()
], usuario);
exports.usuario = usuario;
//# sourceMappingURL=usuario.entity.js.map