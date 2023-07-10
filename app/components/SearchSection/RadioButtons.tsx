import Button from "./Button";
import { useEffect,useMemo } from "react";
interface RadioButtonProps {
  active: string;
  setActive: (arg: string) => void;
}
const RadioButtons: React.FC<RadioButtonProps> = ({ active, setActive }) => {
  const options = ["adjective", "verb", "noun"];
 return (
    <div className="flex gap-4 items-center py-4 ">
      {options.map((option, index) => (
        <Button
          isActive={option == active ? true : false}
          label={option}
          key={index}
          onClick={() => {
            setActive(option);
          }}
        />
      ))}
    </div>
  );
};

export default RadioButtons;
