"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioProviders = void 0;
const relacionamento_usuarios_produtos_entity_1 = require("./relacionamento_usuarios_produtos.entity");
exports.usuarioProviders = [
    {
        provide: 'USUARIO_PRODUTO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(relacionamento_usuarios_produtos_entity_1.relacionamento_usuario_produto),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=usuarioProduto.provider.js.map