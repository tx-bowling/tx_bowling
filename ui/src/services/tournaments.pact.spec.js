import * as Matchers from "@pact-foundation/pact/dsl/matchers";

import TournamentsService from "./tournaments";

describe("TournamentsService", () => {
  const EXPECTED_BODY = {
    tournaments: [
      {
        id: 1,
        name: "Trusty Tournament",
        location_id: 1,
        schedule_ids: [1],
        entry_cost: 5050,
        side_pots_available: ['brackets', 'brackets'],
        link_to_source: 'http://www.bowl.com',
        flier: 'http://www.fillmurray.com/850/1100',
        contact_id: 1,
        created_at: "2020-04-13T03:21:34.548Z",
        updated_at: "2020-04-13T03:21:34.548Z"
      },
      {
        id: 1,
        name: "Trusty Tournament",
        location_id: 1,
        schedule_ids: [1],
        entry_cost: 5050,
        side_pots_available: ['brackets', 'brackets'],
        link_to_source: 'http://www.bowl.com',
        flier: 'http://www.fillmurray.com/850/1100',
        contact_id: 1,
        created_at: "2020-04-13T03:21:34.548Z",
        updated_at: "2020-04-13T03:21:34.548Z"
      },
    ]
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
              Matchers.eachLike({
                id: Matchers.integer(1),
                name: Matchers.like("Trusty Tournament"),
                location_id: Matchers.integer(1),
                schedule_ids: Matchers.eachLike(Matchers.integer(1), {min: 1}),
                entry_cost: Matchers.integer(5050),
                side_pots_available: Matchers.eachLike(
                  Matchers.string('brackets')
                , {min: 2}),
                link_to_source: Matchers.string('http://www.bowl.com'),
                flier: Matchers.string('http://www.fillmurray.com/850/1100'),
                contact_id: Matchers.integer(1),
                created_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z"),
                updated_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z")
            }, {min: 2}),
          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it("returns a successful body", async () => {
      const response = await new TournamentsService().getTournaments();

      expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
      expect(response.data).toEqual(EXPECTED_BODY);
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
            tournament: {
              id: Matchers.integer(1),
              name: Matchers.like("Trusty Tournament"),
              location_id: Matchers.integer(1),
              schedule_ids: Matchers.eachLike(Matchers.integer(1), {min: 1}),
              entry_cost: Matchers.integer(5050),
              side_pots_available: Matchers.eachLike(
                Matchers.string('brackets')
                , {min: 2}),
              link_to_source: Matchers.string('http://www.bowl.com'),
              flier: Matchers.string('http://www.fillmurray.com/850/1100'),
              contact_id: Matchers.integer(1),
              created_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z"),
              updated_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z")
            }

          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it("returns a successful body", async () => {
      const response = await new TournamentsService().getTournament(1);

      expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
      expect(response.data).toEqual({tournament: EXPECTED_BODY.tournaments[0] });
      expect(response.status).toEqual(200);
    })
  })
});
