/**
 * Returns always a Date greather than the current date
 * @returns Date
 */
function generateRandomDate(): Date {
  const currentDate = Date.now();
  const timestamp = Math.floor(Math.random() * currentDate);

  const randomDateGenerated = new Date(timestamp + currentDate);

  return randomDateGenerated;
}

export default generateRandomDate;
