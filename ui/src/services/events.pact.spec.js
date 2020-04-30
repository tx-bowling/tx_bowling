import * as Matchers from "@pact-foundation/pact/dsl/matchers";

import EventsService from "./events";

describe("EventsService", () => {

  const EXPECTED_BODY = {
    id: 1,
    name: 'Singles',
    created_at: "2020-04-13T03:21:34.548Z",
    updated_at: "2020-04-13T03:21:34.548Z"
  };

  const RESPONSE_BODY = {
    id: Matchers.integer(1),
    name: Matchers.string('Singles'),
    created_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z"),
    updated_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z")
  };

  describe("getEvents", () => {
    beforeEach( () => {
      const interaction = {
        state: "there are multiple events",
        uponReceiving: "a request for retrieving events",
        withRequest: {
          method: "GET",
          path: "/api/v1/events.json",
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
            events:
              Matchers.eachLike(RESPONSE_BODY),
          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it("returns a successful body", async () => {
      const response = await new EventsService().getEvents();

      expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
      expect(response.data).toEqual({ events: [EXPECTED_BODY] });
      expect(response.status).toEqual(200);
    })
  })
});
