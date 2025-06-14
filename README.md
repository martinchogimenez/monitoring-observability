# Proyecto Monitoring & Observability con Prometheus y Grafana

Este proyecto muestra cómo aplicar monitoreo y observabilidad en una aplicación Node.js, usando Prometheus como recolector de métricas y Grafana como visualizador, todo desplegado con Docker Compose.

---

## Requisitos previos

- Docker instalado y corriendo  
- Docker Compose instalado  
- Navegador para acceder a las interfaces web  

---

## Pasos para iniciar el entorno

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/monitoring-observability.git
   cd monitoring-observability
   ```

2. Construir y levantar los contenedores:

   ```bash
   docker-compose up --build
   ```

3. Verificar los servicios:

   - Aplicación Node.js: http://localhost:3000  
   - Métricas expuestas: http://localhost:3000/metrics  
   - Prometheus: http://localhost:9090  
   - Grafana: http://localhost:3001  

---

## Configurar Grafana

1. Ingresar a Grafana (http://localhost:3001)  
2. Usuario: `admin`  
   Contraseña: `admin` (se solicita cambiarla en el primer ingreso)

3. Agregar Prometheus como fuente de datos:

   - Ir a `Configuration > Data Sources > Add data source`
   - Seleccionar **Prometheus**
   - En `URL`: `http://prometheus:9090`
   - Click en **Save & Test**

4. Importar dashboard (opcional):

   - Ir a `Dashboards > Import`
   - Subir el archivo: `grafana/dashboards/node-observability.json`
   - Asociarlo al data source creado

---

## Métricas disponibles

| Métrica                   | Descripción                                |
|---------------------------|--------------------------------------------|
| `http_requests_total`     | Total de requests recibidas                |
| `http_response_time_seconds` | Histograma de tiempos de respuesta      |
| `http_errors_total`       | Total de errores HTTP 500                  |

---

## Comandos útiles

- Ver contenedores corriendo:

   ```bash
   docker ps
   ```

- Ver logs de la app:

   ```bash
   docker logs node-app
   ```

- Detener los servicios:

   ```bash
   docker-compose down
   ```

---

## Notas adicionales

- Este proyecto es educativo y sirve como base para proyectos más complejos.
- Se puede ampliar con alertas (Alertmanager) o logs (Loki).
- Las métricas se exponen gracias al paquete `prom-client` de Node.js.

---

## Autor

**Martín Giménez** – martinchogimenez@gmail.com
