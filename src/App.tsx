import { useEffect, useRef, useState } from "react";
import { Flipper } from "./components/flipper";

function App() {
  const [day1, setDay1] = useState(1);
  const [day2, setDay2] = useState(4);

  const [hour1, setHour1] = useState(0);
  const [hour2, setHour2] = useState(0);

  const [minute1, setMinute1] = useState(0);
  const [minute2, setMinute2] = useState(0);

  const [second1, setSecond1] = useState(0);
  const [second2, setSecond2] = useState(0);

  const initialised = useRef(false);

  useEffect(() => {
    if (!initialised.current) {
      setInterval(() => {
        setSecond2((unit) => (unit == 0 ? 9 : unit - 1));
      }, 1000);
      initialised.current = true;
    }
  }, []);

  useEffect(() => {
    if (second2 == 9) {
      setSecond1((unit) => (unit == 0 ? 5 : unit - 1));
    }
  }, [second2]);

  useEffect(() => {
    if (second1 == 5) {
      setMinute2((unit) => (unit == 0 ? 9 : unit - 1));
    }
  }, [second1]);
  useEffect(() => {
    if (minute2 == 9) {
      setMinute1((unit) => (unit == 0 ? 5 : unit - 1));
    }
  }, [minute2]);
  useEffect(() => {
    if (minute1 == 5) {
      setHour2((unit) => (unit == 0 ? 3 : unit - 1));
    }
  }, [minute1]);
  useEffect(() => {
    if (hour2 == 3) {
      setHour1((unit) => (unit == 0 ? 2 : unit - 1));
    }
  }, [hour2]);
  useEffect(() => {
    if (hour1 == 2) {
      setDay2((unit) => (unit == 0 ? 9 : unit - 1));
    }
  }, [hour1]);
  useEffect(() => {
    if (day2 == 9) {
      setDay1((unit) => unit - 1);
    }
  }, [day2]);

  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh] bg-[#1E1F29] p-6 star-bg">
      <h1 className="text-white uppercase font-semibold tracking-[0.3em] text-2xl text-center">
        We're launching soon
      </h1>
      <div className="md:flex md:justify-between w-full px-6 max-w-[1200px] mx-auto">
        <div className="flex relative justify-center">
          <Flipper value={day1} />
          <Flipper value={day2} />
          <em className="absolute bottom-0 left-[50%] not-italic uppercase -translate-x-[50%] tracking-[10px] text-white ml-[10px]">
            days
          </em>
        </div>
        <div className="flex relative justify-center">
          <Flipper value={hour1} />
          <Flipper value={hour2} />
          <em className="absolute bottom-0 left-[50%] not-italic uppercase -translate-x-[50%] tracking-[10px] text-white ml-[10px]">
            hours
          </em>
        </div>
        <div className="flex relative justify-center">
          <Flipper value={minute1} />
          <Flipper value={minute2} />
          <em className="absolute bottom-0 left-[50%] not-italic uppercase -translate-x-[50%] tracking-[10px] text-white ml-[10px]">
            minutes
          </em>
        </div>
        <div className="flex relative justify-center">
          <Flipper value={second1} />
          <Flipper value={second2} />
          <em className="absolute bottom-0 left-[50%] not-italic uppercase -translate-x-[50%] tracking-[10px] text-white ml-[10px]">
            seconds
          </em>
        </div>
      </div>
    </div>
  );
}

export default App;
