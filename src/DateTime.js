export default function DateTime() {
  let showDateTime = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[showDateTime.getDay()];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[showDateTime.getMonth()];
  const dayOfMonth = showDateTime.getDate();

  return (
    <div className="day-date">
      <h1>
        {month}_{dayOfMonth}
      </h1>
      <h4>{dayOfWeek}</h4>
    </div>
  );
}
