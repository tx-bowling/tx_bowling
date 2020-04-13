jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

beforeAll(() => provider.setup());

afterEach(async () => {
  await provider.verify();
});

afterAll(() => provider.finalize());
