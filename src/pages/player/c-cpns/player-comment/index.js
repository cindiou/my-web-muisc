import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import WMChildInputComment from "components/comment/input-comment";
import WMChildUserComment from "components/comment/user-comment";
import Pagination from "components/pagination";

import { getSongCommentAction } from "../../store/actionCreators";

import { CommentWrapper } from "./style";
export default memo(function WMPlayerComment(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const { songComment = {}, currentSong = {} } = useSelector(
    (state) => ({
      songComment: state.getIn(["player", "songComment"]),
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );
  const { total, hotComments = [], comments = [] } = songComment;
  const PER_PAGE = 20;

  const dispatch = useDispatch();
  useEffect(() => {
    setCurrentPage(1);
    if (!currentSong.id) return;

    dispatch(getSongCommentAction(currentSong.id, 0));
  }, [dispatch, currentSong]);

  const pageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(getSongCommentAction(currentSong.id, (page - 1) * PER_PAGE));
  };

  return (
    <CommentWrapper>
      <WMChildInputComment commentCount={total} />
      {hotComments.length && (
        <div className="hotCommend">
          <p className="subTitle">精彩评论</p>
          {hotComments.map((item, index) => {
            return (
              <WMChildUserComment
                key={item.commentId}
                info={item}
                className="hotCommend-item"
              />
            );
          })}
        </div>
      )}
      <div className="newComment">
        <p className="subTitle">最新评论({total})</p>
        {comments.map((item, index) => {
          return (
            <WMChildUserComment
              key={item.commentId}
              info={item}
              className="newComment-item"
            />
          );
        })}
      </div>

      <Pagination
        total={total}
        pageSize={PER_PAGE}
        currentPage={currentPage}
        onPageChange={pageChange}
      />
    </CommentWrapper>
  );
});
