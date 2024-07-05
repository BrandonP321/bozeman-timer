import { Digit } from "./Digit";
import "./Timer.css";

type Props = {
  label: string;
  count: number;
};

export function Timer({ count, label }: Props) {
  const digitOne = Math.floor(count / 10);
  const digitTwo = count % 10;

  return (
    <div className="timer">
      <div className="label">{label}</div>
      <div className="digits">
        <Digit value={digitOne} />
        <Digit value={digitTwo} />
      </div>
    </div>
  );
}
