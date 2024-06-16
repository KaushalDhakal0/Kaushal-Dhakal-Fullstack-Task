export const formatDate = (isoDate) => {
    const date = new Date(isoDate);

    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getUTCDate()).padStart(2, '0');
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    // Format hours for AM/PM
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = String(hours % 12 || 12).padStart(2, '0'); // Convert 0 to 12 for 12 AM/PM

    return `${month}/${day}/${year}, ${formattedHours}:${minutes}:${seconds} ${period}`;
  };