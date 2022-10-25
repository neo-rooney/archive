import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';
import WriteActionButton from '../components/write/WriteActionButton';

const WtirePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
      <WriteActionButton />
    </Responsive>
  );
};

export default WtirePage;
