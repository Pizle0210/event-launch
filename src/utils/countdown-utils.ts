export const calculateTimeToEvent = () => {
  const eventDate = new Date("2024-12-10T09:00:00-07:00"); // October 12, 2023, 9 AM PT
  const currentDate = new Date();
  const timeRemaining = eventDate.getTime() - currentDate.getTime();

  // Calculate months, days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

