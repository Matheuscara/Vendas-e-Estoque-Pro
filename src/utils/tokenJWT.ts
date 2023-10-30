const jwt = require('jsonwebtoken');

export const criarToken = (payload: { email: string; id: number, permissao: string }) => {
  require("dotenv").config();

  const token = jwt.sign(payload, process.env.SECRET_TOKEN_JWT, {
    expiresIn: '1hr', // token expira em 1 hora
  });

  return {
    token: token,
    data_validate: '1hr'
  };
};
