import { useState } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const [like, setlike] = useState(post.like);
  const [isLiked, setisliked] = useState(false);

  const likeHandler = () => {
    setlike(isLiked ? like - 1 : like + 1);
    setisliked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter((u) => u.id === post?.userId)[0]?.profilePicture
              }
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0]?.username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="post picture" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteIcon className="likeIcon" onClick={likeHandler} />
            <ThumbUpAltIcon className="heartIcon" onClick={likeHandler} />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
