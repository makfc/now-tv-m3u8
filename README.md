# now-tv-m3u8
 
Bookmarklet
```
javascript:fetch("https://cors-anywhere.herokuapp.com/https://d1jithvltpp1l1.cloudfront.net/getLiveURL?format=HLS&channelno=332").then(t=>t.json()).then(t=>window.location=t.asset.hls.adaptive);
```
