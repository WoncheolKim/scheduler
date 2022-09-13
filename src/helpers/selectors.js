export function getAppointmentsForDay(state, day) {
  const matchingName = state.days.find((d) => d.name === day);

  if(!matchingName || !state.days.length) return [];

  return matchingName.appointments.map((id) => state.appointments[id]);
}

export function getInterviewersForDay(state, day) {
  const matchingName = state.days.find((d) => d.name === day);

  if(!matchingName || !state.days.length) return [];

  return matchingName.interviewers.map((id) => state.interviewers[id]);
}

export function getInterview(state, interview) {
  if (interview) {
    return {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer],
    };
  }
  return null;
}