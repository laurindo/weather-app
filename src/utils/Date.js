function weekName(number) {
  const dayNames = [
    { short: 'Sun', name: 'Sunday' },
    { short: 'Mon', name: 'Monday' },
    { short: 'Tue', name: 'Tuesday' },
    { short: 'Wed', name: 'Wednesday' },
    { short: 'Thr', name: 'Thursday' },
    { short: 'Fri', name: 'Friday' },
    { short: 'Sat', name: 'Saturday' }
  ]

  return dayNames[number]
}

function millisecondsToDate(ms) {
  return new Date(ms * 1000)
}

export { weekName, millisecondsToDate }
