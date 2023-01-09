import moment, { Moment } from "moment";

export const getDateFromParams = (
  params: URLSearchParams,
  date: Moment,
  isEditing: boolean,
  additionalMinutes: number = 0
) => {
  let defaultTime = !!params.get("isCalendar")
    ? moment()
    : date.clone();

  const startRemainder = !isEditing
    ? 15 - (defaultTime.minute() % 15) + additionalMinutes
    : 0;
  defaultTime.add(startRemainder, "minutes");

  if (isEditing) {
    defaultTime = moment({
      hours: defaultTime.hours(),
      minutes: defaultTime.minutes(),
    });
  }
  return defaultTime;
};
