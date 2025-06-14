const express = require('express');
const client = require('prom-client');
const { collectDefaultMetrics, Registry, Counter } = client;

const app = express();
const register = new Registry();
collectDefaultMetrics({ register });

const httpRequests = new Counter({
  name: 'http_requests_total',
  help: 'Cantidad total de requests HTTP',
});
register.registerMetric(httpRequests);

app.get('/', (req, res) => {
  httpRequests.inc();
  res.send('¡Hola desde Node.js monitoreado!');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App escuchando en http://localhost:${PORT}`);
});
