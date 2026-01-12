# Feature Flag Management API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## 🚀 Descripción

Sistema robusto y escalable para la gestión de **Feature Flags** (Banderas de característica) construido con **NestJS**, **Prisma ORM** y **PostgreSQL**. Esta API permite habilitar o deshabilitar funcionalidades en tiempo real para diferentes entornos de forma dinámica.

A pesar del nombre del repositorio, este proyecto está desarrollado íntegramente con el framework **NestJS**, aprovechando su arquitectura modular y tipado fuerte con **TypeScript**.

## 🛠️ Tecnologías

- **Framework:** [NestJS](https://nestjs.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Base de Datos:** [PostgreSQL](https://www.postgresql.org/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Arquitectura:** Limpia (Hexagonal/Domain Driven Design principles)

## ✨ Características

- ✅ **CRUD Completo:** Creación, lectura, actualización y eliminación de feature flags.
- ✅ **Gestión de Entornos:** Soporte para diferenciar flags por entorno (ej. `production`, `development`).
- ✅ **CORS Dinámico:** Configuración de orígenes permitidos mediante variables de entorno.
- ✅ **Arquitectura Escalable:** Estructura organizada por capas (dominio, aplicación, infraestructura y presentación).
- ✅ **Validación de Datos:** Uso de DTOs y Pipes para asegurar la integridad de la información.

## ⚙️ Configuración del Proyecto

### 1. Requisitos previos

- Node.js (v18 o superior)
- PostgreSQL
- npm o yarn

### 2. Instalación

```bash
npm install
```

### 3. Variables de Entorno

Copia el archivo de ejemplo y configura tus credenciales:

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus datos de base de datos y configuración de CORS:

```env
PORT=3000
CORS_ORIGINS=http://localhost:3000
DATABASE_URL="postgresql://USUARIO:PASSWORD@localhost:5432/TU_DB?schema=public"
```

### 4. Base de Datos (Prisma)

Ejecuta las migraciones para crear las tablas en tu base de datos:

```bash
npx prisma migrate dev --name init
```

## 🏃 Ejecución

```bash
# Modo desarrollo
npm run start:dev

# Modo producción
npm run build
npm run start:prod
```

## 📡 API Endpoints

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| **GET** | `/api/v1/feature-flag` | Obtiene todas las feature flags. |
| **GET** | `/api/v1/feature-flag/:id` | Obtiene una flag específica por ID. |
| **POST** | `/api/v1/feature-flag` | Crea una nueva feature flag. |
| **PUT** | `/api/v1/feature-flag/:id` | Actualiza una flag existente. |

### Ejemplo de Body para POST/PUT:
```json
{
  "key": "new-dashboard-v2",
  "description": "Habilita la nueva versión del dashboard",
  "isEnabled": true,
  "environment": "production"
}
```

## 📄 Licencia

Este proyecto es [MIT licenced](LICENSE).
