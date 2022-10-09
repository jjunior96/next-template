type MaxNumberProps = number | undefined | null;
type MinNumberProps = number | undefined | null;

/**
 * I.E: Call function without parameters
 * `randomNumber(null, null)`
 *
 * @param min n value
 * @param max must be greater than min
 * @returns number
 */
function randomNumberFromInterval(
  min: MinNumberProps,
  max: MaxNumberProps
): number {
  const maxNumber = max ?? 1;
  const minNumber = min ?? 0;

  const number = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  );

  return number;
}

export default randomNumberFromInterval;
