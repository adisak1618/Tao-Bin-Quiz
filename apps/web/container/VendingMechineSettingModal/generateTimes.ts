type Time = {
  label: string;
  value: string;
}

export function generateTimes(): Time[] {
  const times: Time[] = [];
  for (let hour = 0; hour < 24; hour++) {
    // Format the hour to ensure it is two digits
    const formattedHour = hour.toString().padStart(2, '0');
    // Construct the label and value in HH:00 format
    const timeString = `${formattedHour}:00`;
    times.push({ label: timeString, value: timeString });
  }
  return times;
}