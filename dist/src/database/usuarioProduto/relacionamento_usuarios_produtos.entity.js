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
exports.relacionamento_usuario_produto = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../usuario/usuario.entity");
let relacionamento_usuario_produto = class relacionamento_usuario_produto {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], relacionamento_usuario_produto.prototype, "idrelacionamento_usuarios_produtos", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => usuario_entity_1.usuario, (usuarios) => usuarios.teste),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], relacionamento_usuario_produto.prototype, "usuarios", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], relacionamento_usuario_produto.prototype, "data_operacao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], relacionamento_usuario_produto.prototype, "tipo_operacao", void 0);
relacionamento_usuario_produto = __decorate([
    (0, typeorm_1.Entity)()
], relacionamento_usuario_produto);
exports.relacionamento_usuario_produto = relacionamento_usuario_produto;
//# sourceMappingURL=relacionamento_usuarios_produtos.entity.js.map