export function useToolbar() {
  // Create a state using useState
  const counter = useState("counter", () => 0);

  // Function to increment the counter
  const increment = () => {
    counter.value++;
  };

  // Function to set the counter to a specific value
  const setCounter = (value) => {
    counter.value = value;
  };

  // Function to reset the counter
  const resetCounter = () => {
    counter.value = 0;
  };

  // Return the state and actions
  return {
    counter,
    increment,
    setCounter,
    resetCounter,
  };
}
