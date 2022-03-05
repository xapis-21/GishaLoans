import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
  projectId: 'vrw0c396',
  dataset: 'production',
  apiVersion: '2022-03-05', // use current UTC date - see "specifying API version"!
  token: 'sk7EvxBXJts4UqusGVAtqrW5si1vXs6N8bqKg7MUweFycWO4LVZSmb4ldrunjPkV0gjkCDauQBeesa1D2V2r3AiR3x98u82kKQ8RE0ma0I7kYdaj0j9CqJUSVSjEddduq59AKwMs2eVXP8nsdqbBQnNsrXRtPhgKE1hjgw7nAdz9n9HMXHfb', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) =>{builder.image(source)}
