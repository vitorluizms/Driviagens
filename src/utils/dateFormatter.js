import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
dayjs.extend(customParseFormat);

export function formatter(date) {
  const formattedDate = dayjs(date, "DD-MM-YYYY").format("YYYY-MM-DD");
  return formattedDate;
}
