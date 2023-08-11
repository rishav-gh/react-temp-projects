import { useState } from "react";

export default function App() {
  const [bill, setbill] = useState(0);
  const [tip, settip] = useState(0);
  const [tip1, settip1] = useState(0);
  return (
    <div>
      <Bill bill={bill} setbill={setbill} />
      <Tip tip={tip} settip={settip}>
        How much you would like to Tip?
      </Tip>
      <Tip tip={tip1} settip={settip1}>
        How much your friend would like to Tip?
      </Tip>
      <Total bill={bill} tip={tip} tip1={tip1} />
    </div>
  );
}
function Bill({ bill, setbill }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input
        type={Number}
        value={bill}
        onChange={(e) => setbill(Number(e.target.value))}
      ></input>
    </div>
  );
}
function Tip({ children, tip, settip }) {
  return (
    <div>
      <span>{children}</span>
      <input
        type={Number}
        value={tip}
        onChange={(e) => settip(Number(e.target.value))}
      ></input>
    </div>
  );
}
function Total({ bill, tip, tip1 }) {
  return (
    <div>
      <span>{`Your Total ammount is: ${
        bill + bill * ((tip / 2 + tip1 / 2) / 100)
      }`}</span>
    </div>
  );
}
