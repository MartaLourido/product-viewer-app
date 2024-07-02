import "@testing-library/jest-dom";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.create = jest.fn(() => mockedAxios);

class MockIntersectionObserver {
  observe: jest.Mock;
  unobserve: jest.Mock;
  disconnect: jest.Mock;
  callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.observe = jest.fn();
    this.unobserve = jest.fn();
    this.disconnect = jest.fn();
    this.callback = callback;
  }
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});
