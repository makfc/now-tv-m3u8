(() => {
    const cors = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://d1jithvltpp1l1.cloudfront.net/getLiveURL?format=HLS&channelno=332'
    fetch(`${cors}${url}`)
        .then((response) => response.json())
        .then((json) => window.location = json.asset.hls.adaptive)
})()