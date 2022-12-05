import React from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../../components/posts/Pagination';
import post from '../../modules/post';
import { useSearchParams } from 'react-router-dom';

const PaginationContainer = () => {
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));
  const [searchParams] = useSearchParams();

  if (!posts || loading) return null;

  const username = searchParams.get('username');
  const tag = searchParams.get('tag');
  const page = searchParams.get('page') || 1;

  console.log(username);
  console.log(tag);
  console.log(page);
  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default PaginationContainer;
