import "./Clock.css";
import { Timer } from "./Timer";

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function Clock({ days, hours, minutes, seconds }: Props) {
  return (
    <div className="clock">
      <Timer label={"DAYS"} count={days} />
      <Timer label={"HOURS"} count={hours} />
      <Timer label={"MINUTES"} count={minutes} />
      <Timer label={"SECONDS"} count={seconds} />
    </div>
  );
}
