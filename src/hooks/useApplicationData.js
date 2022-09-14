import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState({ ...state, appointments });
    });
  }

function cancelInterview(id) {
  const appointment = {
    ...state.appointments[id],
    interview: null,
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment,
  };
  return axios.delete(`/api/appointments/${id}`).then(() => {
    setState({ ...state, appointments });
  });
}

const setDay = (day) => setState({ ...state, day });
useEffect(() => {
  Promise.all([
    axios.get("/api/days"),
    axios.get("/api/appointments"),
    axios.get("/api/interviewers"),
  ]).then((all) => {
    setState((prev) => ({
      ...prev,
      days: all[0].data,
      appointments: all[1].data,
      interviewers: all[2].data,
    }));
    console.log(all);
  });
}, []);

return {
  state,
  setDay,
  bookInterview,
  cancelInterview,
};
}