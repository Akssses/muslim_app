import { GraphQLClient, gql } from 'graphql-request'
import React from 'react'
import Header from '../components/partials/Header'
import BlogCard from '../components/shared/BlogCard/BlogCard'
import Footer from '../components/partials/Footer/Footer'
import { FiSearch } from 'react-icons/fi'
import ContentLoader from "react-content-loader"

const graphcms = new GraphQLClient('https://api-us-east-1.hygraph.com/v2/clbdg31671qil01ui4826b18f/master')
const QUERY = gql`
{
    posts {
        id
        title
        tags
        slug
        date
        excerpt
        content{
            html
        }
        coverImage{
            url
        }
    }
}
`

export async function getStaticProps(){
     const {posts} = await graphcms.request(QUERY)
     return {
        props: {
            posts,
        },
        revalidate: 10,
     }
}

const Posts = ({posts}) => {
    const [search, setSearch] = React.useState('')
    const onChangeSearch = (event) => {
        setSearch(event.target.value)
    }
    
    return (
        <div>
            <Header/>
            <div className='container mt-10'>
                <div>
                    <input 
                        className="block sm:w-[400px] mx-auto rounded-3xl px-5 py-3 text-sm outline-none border bg-transparent" 
                        onChange={onChangeSearch} 
                        value={search} 
                        type="text" 
                        placeholder='Поиск'
                    />
                </div>
                { posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase())).map((post) => (
                    <BlogCard
                        title={post.title} 
                        date={post.date}
                        coverImage={post.coverImage} 
                        key={post.id} 
                        slug={post.slug}
                        excerpt={post.excerpt}
                        tags={post.tags}
                    /> 
                )) }
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Posts