function ch(x:number) {
  if(x < 26) return String.fromCharCode(x + 'a'.charCodeAt(0))
  else if(x < 52) return String.fromCharCode(x + 'A'.charCodeAt(0) - 26)
  else return String.fromCharCode(x + '0'.charCodeAt(0) - 52)
}

function random_string(n) {
  let str = ''
  for(let i = 0;i < n;i++) {
    str += ch(Math.floor(Math.random() * 62))
  }

  return str
}

const h = new Map<string,string>()

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
	let shortUrl = random_string(longUrl.length)
  h.set(shortUrl,longUrl)
  return shortUrl
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
	return h.get(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */