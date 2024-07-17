import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/counter/counterSlice";

const CountComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        count is {count} (tambah 1)
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        count is {count} (tambah 10)
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        angka: {count} (berkurang 1 jika diklik)
      </button>
    </>
  );
};

export default CountComponent;
