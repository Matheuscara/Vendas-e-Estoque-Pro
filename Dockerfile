FROM ubuntu:18.04

# Instalação dos pacotes necessários
RUN apt-get update && \
    apt-get install -y wget curl gnupg2 ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Adiciona o repositório do NestJS
RUN wget -qO- https://deb.nodesource.com/setup_16.x | bash -
RUN curl -L https://www.mongodb.org/static/pgp/server-5.0.asc | apt-key add -
RUN echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/5.0 main" | tee /etc/apt/sources.list.d/mongodb-org-5.0.list

# Instalação do Node.js e MongoDB
RUN apt-get update && \
    apt-get install -y nodejs mongodb-org && \
    rm -rf /var/lib/apt/lists/*

# Cria o diretório do projeto e define-o como diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos necessários para o container
COPY package*.json ./
COPY tsconfig*.json ./
COPY src ./src

# Instalação das dependências do projeto
RUN npm install

# Configuração do MongoDB
RUN mkdir -p /data/db
RUN echo "mongod --bind_ip_all --fork --logpath /var/log/mongodb.log" > /docker-entrypoint-initdb.d/mongo.sh
RUN chmod +x /docker-entrypoint-initdb.d/mongo.sh

# Habilitação dos subsistemas de cgroups
RUN apt-get update && \
    apt-get install -y cgroup-tools && \
    echo "cgroup /sys/fs/cgroup cgroup2 rw,nosuid,nodev,noexec,relatime 0 0" >> /etc/fstab && \
    mount -a

# Exposição da porta 3000
EXPOSE 5000

# Comando para iniciar o servidor
CMD [ "npm", "run", "start:prod" ]
