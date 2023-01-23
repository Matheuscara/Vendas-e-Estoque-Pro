"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioProviders = void 0;
const usuario_entity_1 = require("./usuario.entity");
exports.usuarioProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(usuario_entity_1.usuario),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=usuario.provider.js.map