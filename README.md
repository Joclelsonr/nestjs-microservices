# Microsserviços de Cadastro e Notificação

## Visão Geral

Este projeto implementa uma arquitetura baseada em microsserviços para gerenciar cadastros de usuários e notificações. Ele é composto por três microsserviços principais:

- **Users API**: Responsável pelo cadastro de usuários.
- **Redis (Filas)**: Atua como um sistema de mensagens assíncrono, armazenando notificações de novos cadastros.
- **Notifications API**: Processa as notificações armazenadas no Redis e envia e-mails de boas-vindas aos usuários recém-cadastrados.

## Fluxo de Funcionamento

1. Um cliente se cadastra por meio da **Users API**.
2. Após o registro, a **Users API** envia um evento `user-created` para o **Redis**.
3. A **Notifications API** consome esse evento e envia um e-mail de boas-vindas ao novo usuário.

## Tecnologias Utilizadas

- Nest.js para o desenvolvimento dos microsserviços.
- Redis como sistema de filas para comunicação assíncrona entre serviços.
- PostgreSql com Prisma ORM para consulta no banco de dados
- Nodemailer para envio de emails
- Docker para facilitar a execução em ambientes isolados.

## Como Executar

### Pré-requisitos

- Docker e Docker Compose
- Node.js 18+
- Yarn ou NPM

```bash
# Clone o repositório
git clone https://github.com/Joclelsonr/nestjs-microservices.git

# Acesse a pasta
cd nestjs-microservices

# Suba os containers
docker-compose up -d

# Microservice Users
http://localhost:3000

# Microservice Notification
http://localhost:3001
```

## Documentação com Swagger

Estes microsserviço expõe uma documentação interativa via Swagger para facilitar o consumo da API.

Após iniciar o servidor, acesse a documentação em: [http://localhost:3000/docs](http://localhost:3000/docs)
