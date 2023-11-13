import React from "react";
import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";

export default function Rightbar({ profile }) {
  const Homerightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/birthday-gif.gif" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Kahkashan</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img src="/assets/birthday-img.jpeg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Ranchi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Ranchi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">RelationShip:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/assets/post-img-5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Zishan Azad</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/post-img-6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Razi khan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/post-img-7.webp"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Raja Khan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/post-img-4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Shadab Akhtar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/post-img-9.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jawed Akhtar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/post-img-2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Sahil Khan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/post-img-1.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Faiza Asim</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <Homerightbar />}
      </div>
    </div>
  );
}
