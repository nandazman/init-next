import initHoneyBadger from "@/utils/honeybadger";
import Honeybadger from "@honeybadger-io/js";

jest.mock("@honeybadger-io/js");

describe("Honeybadger utils", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    delete window.Honeybadger;
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it("should call configure", () => {
    initHoneyBadger();

    expect(Honeybadger.configure).toHaveBeenCalled();
  });

  it("should set window.Honeybadger", () => {
    initHoneyBadger();

    expect(window.Honeybadger).toBeDefined();
  });

  it("should not set window.Honeybadger", () => {
    process.env.ENVIRONMENT = "staging";
    initHoneyBadger();

    expect(window.Honeybadger).not.toBeDefined();
  });
});