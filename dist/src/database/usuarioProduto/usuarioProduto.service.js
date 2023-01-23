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
exports.UsuarioProdutoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let UsuarioProdutoService = class UsuarioProdutoService {
    constructor(usuarioProdutoRepository) {
        this.usuarioProdutoRepository = usuarioProdutoRepository;
    }
    async findAll() {
        return this.usuarioProdutoRepository.find();
    }
};
UsuarioProdutoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USUARIO_PRODUTO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsuarioProdutoService);
exports.UsuarioProdutoService = UsuarioProdutoService;
//# sourceMappingURL=usuarioProduto.service.js.map