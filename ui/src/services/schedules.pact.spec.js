import * as Matchers from "@pact-foundation/pact/dsl/matchers";

import SchedulesService from "./schedules";

export const EXPECTED_BODY = {
  id: 1,
  scheduled_at: "2020-04-13T03:21:34.548Z",
  event_id: 1,
  tournament_id: 1,
  created_at: "2020-04-13T03:21:34.548Z",
  updated_at: "2020-04-13T03:21:34.548Z"
};

export const RESPONSE_BODY = {
  id: Matchers.integer(1),
  scheduled_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z"),
  event_id: Matchers.integer(1),
  tournament_id: Matchers.integer(1),
  created_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z"),
  updated_at: Matchers.iso8601DateTimeWithMillis("2020-04-13T03:21:34.548Z")
};

describe("SchedulesService", () => {
  // describe("getSchedules", () => {
  //   beforeEach( () => {
  //     const interaction = {
  //       state: "there are multiple schedules",
  //       uponReceiving: "a request for retrieving schedules",
  //       withRequest: {
  //         method: "GET",
  //         path: "/api/v1/schedules.json",
  //         query: {},
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       },
  //       willRespondWith: {
  //         status: 200,
  //         headers: {
  //           "Content-Type": "application/json; charset=utf-8",
  //         },
  //         body: {
  //           schedules:
  //             Matchers.eachLike(RESPONSE_BODY),
  //         },
  //       },
  //     };
  //
  //     return provider.addInteraction(interaction);
  //   });
  //
  //   it("returns a successful body", async () => {
  //     const response = await new SchedulesService().getSchedules();
  //
  //     expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
  //     expect(response.data).toEqual({ schedules: [EXPECTED_BODY] });
  //     expect(response.status).toEqual(200);
  //   })
  // })

  describe("getSchedule", () => {
    beforeEach( () => {
      const interaction = {
        state: "there is a schedule with an id of 1",
        uponReceiving: "a request for retrieving a single schedule",
        withRequest: {
          method: "GET",
          path: "/api/v1/schedules/1.json",
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
            schedule: RESPONSE_BODY,
          },
        },
      };

      return provider.addInteraction(interaction);
    });

    it("returns a successful body", async () => {
      const response = await new SchedulesService().getSchedule(1);

      expect(response.headers["content-type"]).toEqual("application/json; charset=utf-8");
      expect(response.data).toEqual({ schedule: EXPECTED_BODY });
      expect(response.status).toEqual(200);
    })
  })

});
