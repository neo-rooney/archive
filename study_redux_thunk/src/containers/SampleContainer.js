import React, { useEffect } from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";
const SampleContainer = ({
  post,
  users,
  loadingPost,
  loadingUsers,
  getPost,
  getUsers,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  return (
    <Sample
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
      post={post}
      users={users}
    />
  );
};

export default connect(
  ({ sample }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS,
  }),
  { getPost, getUsers }
)(SampleContainer);
