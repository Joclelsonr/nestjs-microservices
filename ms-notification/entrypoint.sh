#!/bin/sh

# Aguarda o banco de dados ficar disponível
echo "Aguardando banco de dados em ${DB_HOST}:${DB_PORT}..."

until nc -z $DB_HOST $DB_PORT; do
  echo "Esperando PostgreSQL iniciar..."
  sleep 2
done

echo "Banco de dados disponível! Rodando migrações..."
npx prisma migrate dev --name init

echo "Iniciando aplicação..."
npm run start:dev