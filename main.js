async function start() {
  const weatherPromise = await fetch(
    'https://api.weather.gov/gridpoints/MFL/110,50/forecast'
  )
  // const weatherPromise = await fetch(
  //   'https://api.weather.gov/gridpoints/CHS/82,85/forecast'
  // )
  const weatherData = await weatherPromise.json()

  const outTemperature = weatherData.properties.periods[0].temperature

  document.querySelector("#temperature-output").innerHTML = outTemperature

}

start()
