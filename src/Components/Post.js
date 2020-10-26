import React from 'react';


const Post = ({post}) => {
    return(
        // <div className='card'>
        //     <div className="card-body">
        //         <h5 className="card-title text-center">
        //
        //
        //         </h5>
        //     </div>
        // </div>
        <div className="alert alert-danger" role="alert">
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}
export default Post
