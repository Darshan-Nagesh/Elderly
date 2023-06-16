import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
//don't touch this code
 const client = createClient({
	projectId: 'p2pv0xzo',
	dataset: 'production',
	useCdn: true, // set to `false` to bypass the edge cache
	apiVersion: '2023-05-03',
	token:"skTgNbtAkWuOTZdkGRbl5B1Ph8xFWkekvGv5aTwtVkzgVjHADwTi8glYFNola4j7LyNPntSgtvFMgMGmDGJ0aUyPOWZNuMNtHbf6AjRp9gHOqUmmFEZ8aaRobnnpRDzSvqVGHdw80xYJ8Bp3juIoflOM3pcoK31Aq7H0XRIfICvsiWW3czxI" // use current date (YYYY-MM-DD) to target the latest API version

  })

  const builder=imageUrlBuilder(client);
  export const urlFor=(source)=> builder.image(source);

  export default client;