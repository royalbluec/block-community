import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faBookmark,
  faShareFromSquare,
} from '@fortawesome/free-regular-svg-icons';

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
        <a>
          <FontAwesomeIcon icon={faHeart} className='board__icon' />
          <div>2</div>
        </a>
        <a>
          <FontAwesomeIcon icon={faComment} className='board__icon' />
          <div>Comments</div>
        </a>
        <a>
          <FontAwesomeIcon icon={faBookmark} className='board__icon' />
          <div>Save</div>
        </a>
        <a>
          <FontAwesomeIcon icon={faShareFromSquare} className='board__icon' />
          <div>Share</div>
        </a>
      </StyledBoardFooter>
    </StyledBoardWrapper>
  );
};

export default Board;
