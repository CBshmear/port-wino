import { IconContext } from "react-icons";

export default function ConfigIcon({ children }) {
  return (
    <>
      <IconContext.Provider value={{ color: "red", size: "3em" }}>
        {children}
      </IconContext.Provider>
    </>
  );
}
