import * as Matchers from "@pact-foundation/pact/dsl/matchers";

import LocationsService from "./locations";

describe("LocationService", () => {


  const EXPECTED_BODY = {
    id: 1,
    name: "Bedside Table Bowl",
    lane_count: 24,
    has_restaurant: true,
    has_bar: true,
    address: {
      id: 1,
      street_address: '5700 Grover Ave',
      secondary_address: '',
      city: 'Austin',
      state: 'TX',
      zip_code: '78756',
      notes: 'Near the school',
      created_at: "2020-04-13T03:21:34.548Z",
      updated_at: "2020-04-13T03:21:34.548Z"
    },
    created_at: "2020-04-13T03:21:34.548Z",
    updated_at: "2020-04-13T03:21:34.548Z"
  };

  const RESPONSE_BODY = {
    id: Matchers.integer(1),
    name: Matchers.like("Bedside Table Bowl"),
    lane_count: Matchers.like(24),
    has_restaurant: Matchers.boolean(true),
    has_bar: Matchers.boolean(true),
    address: Matchers.like({
      id: Matchers.integer(1),
      street_address: Matchers.string('5700 Grover Ave'),
      secondary_address: Matchers.string(''),
      city: Matchers.string('Austin'),
      state: Matchers.string('TX'),
      zip_code: Matchers.string('78756'),
      notes: Matchers.string('Near the school'),
      created_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z"),
      updated_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z")
    }),
    created_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z"),
    updated_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z")
  };

  describe("getLocations", () => {
    beforeEach( () => {
      const interaction = {
        state: "there are multiple locations",
        uponReceiving: "a request for retrieving locations",
        withRequest: {
          method: "GET",
          path: "/api/v1/locations.json",
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
            locations:
              Matchers.eachLike(RESPONSE_BODY),
          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it("returns a successful body", async () => {
      const response = await new LocationsService().getLocations();

      expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
      expect(response.data).toEqual({ locations: [EXPECTED_BODY] });
      expect(response.status).toEqual(200);
    })
  })

  describe("getLocation", () => {
    beforeEach( () => {
      const interaction = {
        state: "there is a location with an id of 1",
        uponReceiving: "a request for retrieving a single location",
        withRequest: {
          method: "GET",
          path: "/api/v1/locations/1.json",
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
            location: RESPONSE_BODY,
          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it("returns a successful body", async () => {
      const response = await new LocationsService().getLocation(1);

      expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
      expect(response.data).toEqual({ location: EXPECTED_BODY });
      expect(response.status).toEqual(200);
    })
  })

});
