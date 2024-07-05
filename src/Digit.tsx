import "./Digit.css";

type Props = {
  value: number;
};

export function Digit({ value }: Props) {
  return <div className="digit">{value}</div>;
}
