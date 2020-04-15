const pact = require('@pact-foundation/pact-node');
const path = require('path');

const server = pact.createStub({
  pactUrls: [
    path.resolve(process.cwd(), 'pact', 'pacts', 'tx_bowling_-_front_end-tx_bowling_-_service.json')
  ],
  port: 3001,
  host: 'localhost',
  log: path.resolve(process.cwd(), 'pact', 'logs', 'stub-server.log'),
});

server.start();
