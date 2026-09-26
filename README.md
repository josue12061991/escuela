# 🏫 Proyecto Escuela

Sistema web para institución educativa, con página pública informativa (frontend) y API propia (backend) conectada a una base de datos PostgreSQL.

## 📌 Estado del proyecto

En desarrollo activo. Actualmente implementado:
- Página de inicio pública con slider dinámico, sección de valores institucionales y "sobre nosotros"
- API REST básica para servir datos del slider y personas
- Conexión a base de datos PostgreSQL (Supabase)

Pendiente: matrículas, docentes, blogs, autenticación, dashboard administrativo.

## 🧱 Estructura del repositorio

```
2-escuela/
├── backend/          # API REST (Node.js + Express + PostgreSQL)
└── frontend/         # Aplicación web (Next.js + React + Tailwind CSS)
```

## 🛠️ Stack tecnológico

**Backend**
- Node.js + Express 5
- PostgreSQL (`pg`) — hospedado en Supabase
- CORS, dotenv
- pnpm como gestor de paquetes
- nodemon para desarrollo

**Frontend**
- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4 + shadcn/ui
- lucide-react (íconos)
- embla-carousel (slider)
- pnpm como gestor de paquetes

## ✅ Requisitos previos

- [Node.js](https://nodejs.org/) v20 o superior
- [pnpm](https://pnpm.io/) instalado globalmente (`npm install -g pnpm`)
- Una base de datos PostgreSQL (local o en Supabase)

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/josue12061991/escuela.git
cd escuela
```

### 2. Backend

```bash
cd backend
pnpm install
```

Crea un archivo `.env` dentro de `backend/` (usa `.env.example` como base):

```dotenv
PORT=4000
DATABASE_URL=postgresql://usuario:password@host:puerto/nombre_db
```

Levantar el servidor en modo desarrollo:

```bash
pnpm start:postgresql
```

El backend quedará corriendo en `http://localhost:4000`.

### 3. Frontend

En otra terminal:

```bash
cd frontend
pnpm install
```

Crea un archivo `.env.local` dentro de `frontend/` (usa `.env.local.example` como base):

```dotenv
API_URL=http://localhost:4000
```

Levantar el servidor de desarrollo:

```bash
pnpm dev
```

El frontend quedará disponible en `http://localhost:3000`.

## 🔌 Endpoints disponibles (backend)

| Método | Ruta        | Descripción                          |
|--------|-------------|---------------------------------------|
| GET    | `/slider`   | Devuelve los elementos del hero slider |
| GET    | `/persona`  | Devuelve el listado de personas        |

## 🖼️ Módulos del frontend

- **Header** — navegación principal con menú responsive y selector de tema claro/oscuro
- **HeroSlider** — carrusel principal alimentado desde la API (`/slider`)
- **Valors** — sección de valores institucionales (contenido pendiente de completar)
- **About** — historia, visión, misión y propuesta educativa
- **Footer** — pendiente de desarrollo

## 🎨 Tema claro/oscuro

El sitio soporta modo claro y oscuro, con la preferencia guardada en `localStorage` y aplicada antes del renderizado para evitar parpadeos visuales.

## 📄 Variables de entorno

| Archivo                  | Variable       | Descripción                                 |
|---------------------------|----------------|----------------------------------------------|
| `backend/.env`             | `PORT`         | Puerto en el que corre el backend            |
| `backend/.env`             | `DATABASE_URL` | Cadena de conexión a PostgreSQL              |
| `frontend/.env.local`      | `API_URL`      | URL base del backend consumida por el frontend|

⚠️ Nunca subas archivos `.env` reales al repositorio. Ya están excluidos vía `.gitignore`.

## 🤝 Autor

Josué — desarrollador full-stack del proyecto.
