import * as Matchers from "@pact-foundation/pact/dsl/matchers";

import TournamentsService from "./tournaments";
import {
  EXPECTED_BODY as LOCATION_EXPECTED_BODY,
  RESPONSE_BODY as LOCATION_RESPONSE_BODY
} from "./locations.pact.spec";

import {
  EXPECTED_BODY as SCHEDULES_EXPECTED_BODY,
  RESPONSE_BODY as SCHEDULES_RESPONSE_BODY
} from "./schedules.pact.spec";

describe("TournamentsService", () => {
  const EXPECTED_BODY = {
    id: 1,
    name: "Trusty Tournament",
    location_id: 1,
    schedule_ids: [1],
    entry_fee: 5050,
    side_pots_available: ['brackets'],
    source_url: 'http://www.bowl.com',
    source_description: 'USBC Open Championships',
    flier: 'http://www.fillmurray.com/850/1100',
    contact_id: 1,
    created_at: "2020-04-13T03:21:34.548Z",
    updated_at: "2020-04-13T03:21:34.548Z"
  };

  const RESPONSE_BODY = {
    id: Matchers.integer(1),
    name: Matchers.like("Trusty Tournament"),
    location_id: Matchers.integer(1),
    schedule_ids: Matchers.eachLike(Matchers.integer(1)),
    entry_fee: Matchers.integer(5050),
    side_pots_available: Matchers.eachLike(Matchers.string('brackets')),
    source_url: Matchers.string('http://www.bowl.com'),
    source_description: Matchers.string('USBC Open Championships'),
    flier: Matchers.string('http://www.fillmurray.com/850/1100'),
    contact_id: Matchers.integer(1),
    created_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z"),
    updated_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z")
  };

  describe("getTournaments", () => {
    beforeEach( () => {
      const interaction = {
        state: "there are multiple tournaments",
        uponReceiving: "a request for retrieving tournaments",
        withRequest: {
          method: "GET",
          path: "/api/v1/tournaments.json",
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
            tournaments:
              Matchers.eachLike(RESPONSE_BODY),
          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it("returns a successful body", async () => {
      const response = await new TournamentsService().getTournaments();

      expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
      expect(response.data).toEqual({ tournaments: [EXPECTED_BODY] });
      expect(response.status).toEqual(200);
    })
  });

  describe('get tournament', ()=> {
    beforeEach( () => {
      const interaction = {
        state: "there is a tournament with an id of 1",
        uponReceiving: "a request for retrieving a single tournament",
        withRequest: {
          method: "GET",
          path: "/api/v1/tournaments/1.json",
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
            tournament: RESPONSE_BODY
          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it("returns a successful body", async () => {
      const response = await new TournamentsService().getTournament(1);

      expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
      expect(response.data).toEqual({tournament: EXPECTED_BODY });
      expect(response.status).toEqual(200);
    })
  });

  describe("getTournamentLocation", () => {
    beforeEach( () => {
      const interaction = {
        state: "there is a tournament with an id of 1",
        uponReceiving: "a request for retrieving a tournament's location",
        withRequest: {
          method: "GET",
          path: "/api/v1/tournaments/1/location.json",
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
            location: LOCATION_RESPONSE_BODY,
          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it("returns a successful body", async () => {
      const response = await new TournamentsService().getTournamentLocation(1);

      expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
      expect(response.data).toEqual({ location: LOCATION_EXPECTED_BODY });
      expect(response.status).toEqual(200);
    })
  })

  describe("getTournamentSchedules", () => {
    beforeEach( () => {
      const interaction = {
        state: "there is a tournament with an id of 1",
        uponReceiving: "a request for retrieving a tournament's schedules",
        withRequest: {
          method: "GET",
          path: "/api/v1/tournaments/1/schedules.json",
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
            schedules: Matchers.eachLike(SCHEDULES_RESPONSE_BODY),
          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it("returns a successful body", async () => {
      const response = await new TournamentsService().getTournamentSchedules(1);

      expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
      expect(response.data).toEqual({ schedules: [SCHEDULES_EXPECTED_BODY] });
      expect(response.status).toEqual(200);
    })
  })
});
