"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtoProviders = void 0;
const produtos_entity_1 = require("./produtos.entity");
exports.produtoProviders = [
    {
        provide: 'PRODUTOS_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(produtos_entity_1.produtos),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=produto.provider.js.map