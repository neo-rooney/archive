import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import qs from 'qs';
import { useSearchParams } from 'react-router-dom';
import { listPosts } from '../../modules/posts';

const PostListContainer = () => {
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const username = searchParams.get('username');
    const tag = searchParams.get('tag');
    const page = searchParams.get('page');
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, searchParams]);

  return (
    <PostList
      posts={posts}
      error={error}
      loading={loading}
      showWriteButton={user}
    />
  );
};

export default PostListContainer;
