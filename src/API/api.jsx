export function SearchApi(searchText, setSelectPosition, setError,setSearchText) {
  const REACT_APP_MAP_API_KEY = process.env.REACT_APP_MAP_API_KEY;
  const REACT_APP_MAP_MAP_BASE_URL = process.env.REACT_APP_MAP_MAP_BASE_URL;

  fetch(
    `${REACT_APP_MAP_MAP_BASE_URL}/forecast?q=${searchText}&appid=${REACT_APP_MAP_API_KEY}`
  )
    .then((response) => response.text())
    .then((result) => {
      console.log("error", JSON.parse(result).message)
      if(JSON.parse(result).message === "Nothing to geocode"){
        setError("Please enter a valid city name")
      }else if(JSON.parse(result).message === "city not found"){
        setError("City not found")
      }else {setSelectPosition(JSON.parse(result)); setSearchText("")}
    })
    .catch((err) => console.log("err", err) );
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
