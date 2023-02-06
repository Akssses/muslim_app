import { GraphQLClient, gql } from 'graphql-request'
import React from 'react' 
import Header from '../../components/partials/Header'
import Footer from '../../components/partials/Footer/Footer'
import s from './slug.module.css'


const graphcms = new GraphQLClient('https://api-us-east-1.hygraph.com/v2/clbdg31671qil01ui4826b18f/master')
const QUERY = gql`
 query Post($slug: String!) {
    post(where: {slug: $slug}) {
        id,
        title,
        slug,
        tags,
        date,
        excerpt,
        content{
            html
        }
        coverImage{
            id,
            url
        }
    }
 }
`

const SLUGLIST = gql`
 {
    posts {
        slug
    }
 }
`

export async function getStaticPaths() {
    const {posts} = await graphcms.request(SLUGLIST)
    return {
        paths: posts.map((post) => ({params: {slug: post.slug}})),
        fallback: false
    }
}

export async function getStaticProps({params}){
     const slug = params.slug
     const data = await graphcms.request(QUERY, {slug})
     const post = data.post
     return {
        props: {
            post,
        },
        revalidate: 10,
     }
}

export default function BlogPost({post}) {
    return (
        <div>
            <Header/>
            <div className='container'>
                <div>
                    <title>{post.title}</title>
                    <meta name='description' content={post.excerpt} />
                </div>
                <img className='my-10 w-full rounded-3xl' src={post.coverImage.url} alt="" />
                <h1 className='text-3xl font-bold mb-5'>{post.title}</h1>
                <div className={s.articles_text} dangerouslySetInnerHTML={{ __html: post.content.html }}>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}