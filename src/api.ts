interface ApodResponse  {
	copyright:      string
	date:           string
	explanation:    string
	hdurl:          string
	mediaType:      string
	serviceVersion: string
	title:          string
	url:            string
}



async function getAPOD(): Promise<ApodResponse> {
  return fetch("http://localhost:3000/apod")
    .then(res => res.json())
    .then(res => {
      console.log(res)
      return res as ApodResponse
    })
}


export default getAPOD;