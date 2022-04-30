import { useEffect, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setTimer((timer) => {
        console.log(timer);
        if (timer === 20) {
          clearInterval(id);
          return ;
        }
        return timer + 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="App">
      <h2>Timer:{timer}</h2>
    </div>
  );
};