export function SearchApi(searchText, setSelectPosition) {
  const REACT_APP_MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;
  const REACT_APP_MAP_MAP_BASE_URL = process.env.REACT_APP_MAP_MAP_BASE_URL;

  fetch(
    `${REACT_APP_MAP_MAP_BASE_URL}/forecast?q=${searchText}&appid=${REACT_APP_MAP_API_KEY}`
  )
    .then((response) => response.text())
    .then((result) => {
      setSelectPosition(JSON.parse(result));
    })
    .catch((err) => console.log("err: ", err));
}

export function MapApi(latitude, longitude, setData) {
  const REACT_APP_MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;
  const REACT_APP_MAP_MAP_BASE_URL = process.env.REACT_APP_MAP_MAP_BASE_URL;

  fetch(
    `${REACT_APP_MAP_MAP_BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_MAP_API_KEY}`
  )
    .then((response) => response.text())
    .then((result) => {
      setData(JSON.parse(result));
    })
    .catch((err) => console.log("err: ", err));
}
