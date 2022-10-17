// sanityClient will help to communicate with sanity backend
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// 
export const client =  sanityClient({
    projectId: 'pml3xkkv',
    dataset: 'production',
    apiVersion: '2022-10-18',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builer = imageUrlBuilder(client);

export const urlFor = (source) => builer.image(source)