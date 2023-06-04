function getPosition() {
  return new Promise(() => ({
    coords: {
      latitude: 43.65107,
      longitude: -79.347015
    }
  }))
}

export const geolocation = {
  getPosition: () =>
    new Promise(() => ({
      coords: {
        latitude: 43.65107,
        longitude: -79.347015
      }
    }))
  /* new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    ) */
}

export { getPosition }
