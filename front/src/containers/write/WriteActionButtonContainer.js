import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { writePost } from '../../modules/write';
import { useNavigate } from 'react-router-dom';
import WriteActionButton from '../../components/write/WriteActionButton';

const WriteActionButtonContainer = () => {
  const dispatch = useDispatch();
  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }));

  const onPublish = () => {
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  };

  const navigate = useNavigate();
  const onCancel = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [post, postError, navigate]);

  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonContainer;
