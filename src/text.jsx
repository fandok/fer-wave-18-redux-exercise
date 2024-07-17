import { useDispatch, useSelector } from "react-redux";
import { addText, updateText } from "./redux/text/textSlice";

const TextComponent = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text.text);
  const textList = useSelector((state) => state.text.textList);

  return (
    <>
      <div>
        <input
          onChange={(event) => {
            dispatch(updateText(event.target.value));
          }}
          value={text}
          placeholder="input here"
        />
        <button
          onClick={() => {
            dispatch(addText(text));
            dispatch(updateText(""));
          }}
        >
          add
        </button>
      </div>
      {textList.map((text) => (
        <h2 key={text}>{text}</h2>
      ))}
    </>
  );
};

export default TextComponent;
