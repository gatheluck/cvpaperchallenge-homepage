const fs = require('fs-extra')
const axios = require('axios')

// URL for general information
const GOOGLE_APP_SCRIPT_RESOURCE_URL = 'https://script.google.com/macros/s/AKfycbzWQdULhZxCbkimsCsjn2DMOs6L8HV2Y897CrVahlcFwQ_zvqOr/exec'
const urls = [
  `${GOOGLE_APP_SCRIPT_RESOURCE_URL}?entity=news`,
  `${GOOGLE_APP_SCRIPT_RESOURCE_URL}?entity=members`,
  `${GOOGLE_APP_SCRIPT_RESOURCE_URL}?entity=publications`,
  `${GOOGLE_APP_SCRIPT_RESOURCE_URL}?entity=talks`,
  `${GOOGLE_APP_SCRIPT_RESOURCE_URL}?entity=slides`,
]

module.exports = function fetchData() {
	//writeData writes the data to a file given the path
	//Same as in previous solution
	const writeData = (path, data) => {
	  return new Promise((resolve, reject) => {
		try {
		  fs.ensureFileSync(path)
		  fs.writeJson(path, data, resolve(`${path} Write Successful`))
		} catch (e) {
		  console.error(`${path} Write failed. ${e}`)
		  reject(`${path} Write Failed. ${e}`)
		}
	  })
	}
  
	const getData = async builder => {
	  fs.emptyDirSync('static/data')
	  console.log(`STARTING JSON BUILD FOR ${urls[0]}...`)
	  const fetcher = []
  
	  // Fetch list of news from API
    const allNews = await axios.get(urls[0])
    const allMembers = await axios.get(urls[1])
    const allPublications = await axios.get(urls[2])
    const allTalks = await axios.get(urls[3])
    const allSlides = await axios.get(urls[4])

    fetcher.push(writeData('static/data/news.json', { content: allNews.data }))
    fetcher.push(writeData('static/data/members.json', { content: allMembers.data }))
    fetcher.push(writeData('static/data/publications.json', { content: allPublications.data }))
    fetcher.push(writeData('static/data/talks.json', { content: allTalks.data }))
    fetcher.push(writeData('static/data/slides.json', { content: allSlides.data }))    

	  return Promise.all(fetcher)
		.then(() => {
		  console.log('JSON Build complete!')
		})
		.catch(e => {
		  throw e
		})
	}
  
	// Run it before the nuxt build stage
	this.nuxt.hook('build:before', getData)
  }