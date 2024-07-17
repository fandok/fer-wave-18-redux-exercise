import { useDispatch, useSelector } from "react-redux";
import { addText, editText, updateText } from "./redux/text/textSlice";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";

const TextChild = ({ text, index }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(text);
  const [isEdit, setIsEdit] = useState(false);

  return isEdit ? (
    <>
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setIsEdit(false);
          dispatch(editText({ value: input, index }));
        }}
      >
        edit
      </button>
    </>
  ) : (
    <>
      <h2 style={{ margin: 0 }}>{text}</h2>
      <CiEdit
        onClick={() => setIsEdit(true)}
        style={{ cursor: "pointer" }}
        size={30}
      />
    </>
  );
};

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
      {textList.map((text, index) => (
        <div
          style={{
            display: "flex",
            gap: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
          key={text}
        >
          <TextChild text={text} index={index} />
        </div>
      ))}
    </>
  );
};

export default TextComponent;
