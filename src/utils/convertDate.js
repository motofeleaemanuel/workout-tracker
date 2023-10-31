export const convertDate = (originalDate) => {
  const parsedDate = new Date(originalDate);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options)
    .format(parsedDate)
    .replace(/\//g, ".");
};

export const convertDateForChart = (originalDate) => {
  const parsedDate = new Date(originalDate);
  const day = parsedDate.getDate().toString().padStart(2, "0");
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
  const year = parsedDate.getFullYear();
  const hours = parsedDate.getHours().toString().padStart(2, "0");
  const minutes = parsedDate.getMinutes().toString().padStart(2, "0");
  const seconds = parsedDate.getSeconds().toString().padStart(2, "0");

  return `${month}.${day}.${year}, ${hours}:${minutes}:${seconds}`;
};
