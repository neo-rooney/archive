import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';

const WtirePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
    </Responsive>
  );
};

export default WtirePage;
