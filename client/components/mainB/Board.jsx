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
        {/* temp */}
        <span>Profile</span>
        <div>
          <p>name</p>
          <div>
            <p>News</p>
            <span>5 days ago</span>
          </div>
        </div>
      </StyledBoardHeader>
      <StyledBoardBody>
        <h2>Title</h2>
        <p>
          Content Content Content Content Content Content Content Content
          Content Content Content Content Content Content Content Content
          Content Content Content Content Content Content Content Content
        </p>
      </StyledBoardBody>
      <StyledBoardFooter>
        <a>Like</a>
        <a>Comments</a>
        <a>Save</a>
        <a>Share</a>
      </StyledBoardFooter>
    </StyledBoardWrapper>
  );
};

export default Board;
