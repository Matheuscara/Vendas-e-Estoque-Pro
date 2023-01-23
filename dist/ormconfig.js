"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Mat748596123',
    database: 'estoquepro',
    entities: [
        "src/modules/*.entity.{ts,js}"
    ],
    synchronize: true,
};
//# sourceMappingURL=ormconfig.js.map