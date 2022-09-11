export function getAppointmentsForDay(state, day) {
  const matchingName = state.days.find((d) => d.name === day);

  if(!matchingName || !state.days.length) return [];

  return matchingName.appointments.map((id) => state.appointments[id]);
}
