import React from "react";

const SVELTE_COUNTER = "svelte-counter";

export default function Home() {
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    import("svelte-project/Counter");
  }, []);

  const getElementIndex = () => {
    return (
      Number(
        document?.querySelector(SVELTE_COUNTER)?.getAttribute("element-index")
      ) ?? null
    );
  };

  const getStateFromSvelte = () => {
    setCount(getElementIndex() || count);
  };

  const dangerouslyIncrementCount = () => {
    setCount(count + 1);
  };

  const safelyIncrementCount = () => {
    const elementIndex = getElementIndex();

    if (Number.isInteger(elementIndex)) {
      setCount(elementIndex + 1);
      document
        .querySelector(SVELTE_COUNTER)
        ?.setAttribute("element-index", elementIndex + 1 + "");
    }
  };

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <svelte-counter
          style={{
            " :root": JSON.stringify({
              "--primary-color": "red",
            }),
          }}
          element-index="0"
        >
          <div className="buttons-container">
            <button
              className="button dangerous"
              onClick={dangerouslyIncrementCount}
            >
              Increment
            </button>

            <button className="button safe" onClick={safelyIncrementCount}>
              Increment
            </button>
          </div>
        </svelte-counter>
      </div>

      <div>
        <button onClick={getStateFromSvelte}>Get state from Svelte</button>
        <p>React count state: {count}</p>
      </div>
      {/* <svelte-hello></svelte-hello> */}
    </>
  );
}
