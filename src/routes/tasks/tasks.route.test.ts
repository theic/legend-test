process.env.NODE_ENV = "test";

import * as request from "supertest";
import server from "../../app";

jest.mock('../../services/tasks/tasks.service');

describe("Tasks Route", () => {
  let mockTask;

  beforeAll(async () => {
    mockTask = {
      title: "One very important task.",
      priority: 50
    };
  });

  describe("/POST add", () => {
    it("it should add task", async () => {
      const task = await request(server)
        .post("/add")
        .send(mockTask);
      expect(task.status).toBe(200);
      expect(task.body.status).toEqual(true);
      expect(task.body.data.title).toEqual(mockTask.title);
      expect(task.body.data.priority).toEqual(mockTask.priority);
    });

    it("it shouldnt add task", async () => {
      const task = await request(server).post("/add");
      expect(task.status).toBe(400);
      expect(task.body.status).toEqual(false);
    });
  });

  describe("/GET task", () => {
    it("it should return single task", async () => {
      const task = await request(server).get("/task");
      expect(task.status).toBe(200);
      expect(task.body.status).toEqual(true);
    });
  });

  describe("/DELETE task", () => {
    it("it should delete single task", async () => {
      const task = await request(server).get("/task");
      expect(task.status).toBe(200);
      expect(task.body.status).toEqual(true);
    });
  });

  afterAll(() => {
  });
});
