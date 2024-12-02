
// const quote = fetch("https://quotes-api-self.vercel.app/quote").then((value) => value.json()).then((v) => document.querySelector('#quote').innerHTML = v);

// document.querySelector('#quote').innerHTML = v -- this above method was throwing [object Object] because I was not rendering the JS object resulting from .json into the dom. below is the proper way using .notation and template literals to grap the objects from the rendered API response.

// const quote = fetch("https://qotes-api-self.vercel.app/quote").then((value) => value.json()).then((v) => document.querySelector('#quote').innerHTML = `<div>${v.quote}</div><div>${v.author}</div>`).catch((error) => document.querySelector('#quote').innerHTML = `<div>Oops, we ${error.message}. Let's try that again.</div>`)

async function getQuote() {
  try {
    const quote = await fetch("https://quotes-api-self.vercel.app/quote")
    const value = await quote.json();
    document.querySelector('#quote').innerHTML = `<div>${value.quote}</div><div>${value.author}</div>`;
  } catch (error) {
    console.error("Error getting the quote", error);
    document.querySelector('#quote').innerHTML = `<div>Oops, we ${error.message}. Let's try that again.</div>`
  }
}

getQuote();

const image = fetch("https://random.imagecdn.app/500/150").then((value) => document.querySelector('img').src = value.url).catch((error) => document.querySelector9('#quote').innerHTML = `<div>${getQuote} but something's wrong with the image. Look: ${error.message}</div>`)



