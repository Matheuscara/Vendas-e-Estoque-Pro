const jwt = require('jsonwebtoken');

export const criarToken = (payload: { email: string; id: number, permissao: string }) => {
  const token = jwt.sign(payload, process.env.SECRET_TOKEN_JWT, {
    expiresIn: '1m', // token expira em 1 hora
  });

  return {
    token: token,
    data_validate: '1m'
  };
};
