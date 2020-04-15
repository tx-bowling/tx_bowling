import * as Matchers from "@pact-foundation/pact/dsl/matchers";

import AddressesService from "./addresses";

describe("AddressesService", () => {


  const EXPECTED_BODY = {
    addresses: [
      {
        id: 1,
        street_address: '1234 Bowling Ave',
        secondary_address: 'Suite 3',
        city: 'Austin',
        state: 'TX',
        zip_code: '78745',
        latitude: '30.3291',
        longitude: '-97.7317',
        notes: 'Near the school',
        created_at: "2020-04-13T03:21:34.548Z",
        updated_at: "2020-04-13T03:21:34.548Z"
      },
      {
        id: 1,
        street_address: '1234 Bowling Ave',
        secondary_address: 'Suite 3',
        city: 'Austin',
        state: 'TX',
        zip_code: '78745',
        latitude: '30.3291',
        longitude: '-97.7317',
        notes: 'Near the school',
        created_at: "2020-04-13T03:21:34.548Z",
        updated_at: "2020-04-13T03:21:34.548Z"
      },
    ]
  };

  describe("getAddresses", () => {
    beforeEach( () => {
      const interaction = {
        state: "there are multiple addresses",
        uponReceiving: "a request for retrieving addresses",
        withRequest: {
          method: "GET",
          path: "/api/v1/addresses.json",
          query: {},
          headers: {
            Accept: "application/json",
          },
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: {
            addresses:
              Matchers.eachLike({
                id: Matchers.integer(1),
                street_address: Matchers.string('1234 Bowling Ave'),
                secondary_address: Matchers.string('Suite 3'),
                city: Matchers.string('Austin'),
                state: Matchers.string('TX'),
                zip_code: Matchers.string('78745'),
                latitude: Matchers.string('30.3291'),
                longitude: Matchers.string('-97.7317'),
                notes: Matchers.string('Near the school'),
                created_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z"),
                updated_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z")
              }, {min: 2}),
          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it("returns a successful body", async () => {
      const response = await new AddressesService().getAddresses();

      expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
      expect(response.data).toEqual(EXPECTED_BODY);
      expect(response.status).toEqual(200);
    })
  });

  describe("getAddress", () => {
    beforeEach( () => {
      const interaction = {
        state: "there is an address with an id of 1",
        uponReceiving: "a request for retrieving a single address",
        withRequest: {
          method: "GET",
          path: "/api/v1/addresses/1.json",
          query: {},
          headers: {
            Accept: "application/json",
          },
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: {
            address: {
              id: Matchers.integer(1),
              street_address: Matchers.string('1234 Bowling Ave'),
              secondary_address: Matchers.string('Suite 3'),
              city: Matchers.string('Austin'),
              state: Matchers.string('TX'),
              zip_code: Matchers.string('78745'),
              latitude: Matchers.string('30.3291'),
              longitude: Matchers.string('-97.7317'),
              notes: Matchers.string('Near the school'),
              created_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z"),
              updated_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z")
            },
          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it("returns a successful body", async () => {
      const response = await new AddressesService().getAddress(1);

      expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
      expect(response.data).toEqual({ address: EXPECTED_BODY.addresses[0] });
      expect(response.status).toEqual(200);
    })
  });
});
