import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";
import useCounter from "./useCounter";
// import { getAuth } from "firebase-admin/auth";

test("should use counter", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
