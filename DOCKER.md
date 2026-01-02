# Docker Setup & Usage Guide

This project uses Docker Compose profiles to separate the **Development** workflow from the **Production** preview.

## Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

---

## 🚀 Option 1: Development Mode
Use this for active coding. It spins up a Node.js container with **Hot Module Replacement (HMR)** enabled. Changes in your code will instantly update the browser.

### Command
```bash
# Start the development server
docker compose --profile dev up
```

- **URL:** `http://localhost:5173`
- **Features:** - Auto-installs dependencies (`npm ci`) on first run.
    - Watches for file changes in real-time.

### Troubleshooting Dev Mode
If changes aren't reflecting, ensure polling is active (already configured in `docker-compose.yml`):
```bash
# Check logs to see if Vite is running
docker logs -f portfolio-dev
```

---

## 📦 Option 2: Production Preview
Use this to test the **final build** as it would look on a real server. This builds the React app and serves static files using **Nginx**.

### Command
```bash
# Build and start the production container
docker compose --profile prod up --build
```

- **URL:** `http://localhost:8080`
- **Features:**
    - Uses a multi-stage Docker build (Builds React -> Copies to Nginx).
    - Simulates the exact environment used in Kubernetes.

---

## 🔧 Option 3: Run Both (Full Stack)
If you need to compare Dev vs Prod side-by-side.

```bash
docker compose --profile dev --profile prod up
```

---

## ⚙️ Configuration (Optional)
You can customize ports by creating a `.env` file in the root directory:

```env
# .env file
DEV_PORT=3000
PROD_PORT=9090
```

## 🧹 Cleanup
To stop containers and remove network artifacts:

```bash
# Stop containers
docker compose down

# Stop and remove volumes (Warning: clears container node_modules)
docker compose down -v
```
