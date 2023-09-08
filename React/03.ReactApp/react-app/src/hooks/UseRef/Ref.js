import { useRef } from "react";

function Ref() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };

  return (
    <>
      <h1>UseRef</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onclick}>Change Name</button>
    </>
  );
}

export default Ref;
