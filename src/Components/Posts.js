import React from 'react';
import Post from "./Post";
import {connect} from 'react-redux'
const Posts = ({syncPosts}) => {
    if (!syncPosts.length){
        return <p className='text-center'>No Posts</p>
    }
    return syncPosts.map((post,index) => <Post post={post} key={post.id}/>)
}
const mapStateToProps = state => {
    console.log(state)
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps)(Posts)