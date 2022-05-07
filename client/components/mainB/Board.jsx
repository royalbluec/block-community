import React from 'react';

import {
  StyledBoardWrapper,
  StyledBoardHeader,
  StyledBoardBody,
  StyledBoardFooter,
} from './styles/Board.styles';

const Board = () => {
  return (
    <StyledBoardWrapper>
      <StyledBoardHeader>
        <div>Profile</div>
        <div>
          <div>name</div>
          <div>
            <div>News</div>
            <div>5 days ago</div>
          </div>
        </div>
      </StyledBoardHeader>
      <StyledBoardBody>
        <div>Title</div>
        <div>
          Content Content Content Content Content Content Content Content
          Content Content Content Content Content Content Content Content
          Content Content Content Content Content Content Content Content
        </div>
        <div>
          <div>Tag1</div>
          <div>Tag2</div>
          <div>Tag3</div>
        </div>
      </StyledBoardBody>
      <StyledBoardFooter>
        <div>Like</div>
        <div>Comments</div>
        <div>Save</div>
        <div>Share</div>
      </StyledBoardFooter>
    </StyledBoardWrapper>
  );
};

export default Board;
