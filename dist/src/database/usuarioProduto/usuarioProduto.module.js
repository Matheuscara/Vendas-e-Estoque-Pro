"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioProdutoModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database.module");
const usuarioProduto_provider_1 = require("./usuarioProduto.provider");
const usuarioProduto_service_1 = require("./usuarioProduto.service");
let UsuarioProdutoModule = class UsuarioProdutoModule {
};
UsuarioProdutoModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [
            ...usuarioProduto_provider_1.usuarioProviders,
            usuarioProduto_service_1.UsuarioProdutoService,
        ],
        exports: [usuarioProduto_service_1.UsuarioProdutoService],
    })
], UsuarioProdutoModule);
exports.UsuarioProdutoModule = UsuarioProdutoModule;
//# sourceMappingURL=usuarioProduto.module.js.map