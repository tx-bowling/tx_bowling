const path = require("path");
const Pact = require("@pact-foundation/pact").Pact;

global.port = 3001;
global.provider = new Pact({
  port: global.port,
  log: path.resolve(process.cwd(), 'pact', 'logs', 'create-contracts.log'),
  dir: path.resolve(process.cwd(), 'pact', 'pacts'),
  logLevel: 'trace',
  spec: 2,
  pactfileWriteMode: "update",
  consumer: "TX Bowling - Front End",
  provider: "TX Bowling - Service",
  host: 'localhost'
});
