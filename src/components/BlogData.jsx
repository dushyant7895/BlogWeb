import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const BlogData = () => {

    const {posts,loading} = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[650px] py-3 flex flex-col gap-y-7 mb-[70px] justify-center items-center'>
        {
            loading ? (<Spinner />) :
            (posts.length===0 ? 
            (<div>
                <p>No post found</p>
            </div>) 
            : 
            (posts.map((post)=> (
                <div key={post.id}>
                    <p className='font-bold text-xl'>{post.title}</p>
                    <p className='text-[14px]'>
                        By <span className='italic'>{post.author}</span> on <span className='underline text-bold'>{post.category}</span>
                    </p>
                    <p>Posted on {post.date}</p>
                    <p>{post.content}</p>
                    <div className='flex gap-x-2'>
                        {post.tags.map((tag,index)=>{
                            return <span className='text-blue-600 underline' key={index}>{`#${tag}`}</span>
                        })}
                    </div>
                </div>
            ))))
        }
    </div>
  )
}

export default BlogData