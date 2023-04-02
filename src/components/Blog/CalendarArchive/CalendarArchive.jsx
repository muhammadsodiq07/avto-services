import "./CalendarArchive.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { emplloyActions } from "../../../store/Splice";

export default function CalendarArchive() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());
  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const calendarHandler = (event) => {
    dispatch(
      emplloyActions.calendarHandler({
        day: event.getDate(),
        month: monthArr.filter((item, inx) =>
          event.getMonth() + 1 === inx + 1 ? item : ""
        )[0],
        year: event.getFullYear(),
      })
    );
  };

  return (
    <>
      <section className="blog-calendar">
        <h4 className="blog-calendar__title">{t("calendar-archive")}</h4>

        <div className="blog-calendar__calendar">
          <Calendar
            onChange={(e) => (
              onChange(e), calendarHandler(e), window.scrollTo(0, 0)
            )}
            value={value}
          />
        </div>
      </section>
    </>
  );
}
