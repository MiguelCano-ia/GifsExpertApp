export const getGifs = async ( category ) => {
   
  const giphyUrl = 'https://api.giphy.com/v1/gifs/search';
  const apiKey = 'wrDRk2vZWP2NzBfaWJfmQg0eH2ZWtxu6';

  const url = `${giphyUrl}?api_key=${apiKey}&q=${category}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json(); 

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }))

  return gifs;
}