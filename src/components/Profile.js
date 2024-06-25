import React from "react";
import PostGrid from "./PostGrid";
import Profile1 from "../Profile1.json";
import profiledata from "../Profiledata.json";
import '../App.css';
function Profile() {
  return (
    <>
      <div className="profile-div1">
        <div className="profile-header">
          <img src={profiledata[0].profilePic} className="profile-picture" />
          <div className="profile-info">
            <h4 className="profile">
              {profiledata[0].username}
              <button
                type="button"
                class="btn btn-secondary btn-sm profile-btn1 mx-2"
              >
                Edit profile
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-sm profile-btn1 mx-2"
              >
                View archieve
              </button>
              <i class="bi bi-gear-wide"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-gear-wide"
                viewBox="0 0 16 16"
              >
                <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
              </svg>
            </h4>
            <p>
              <b className="profile-b mx-2">0 posts</b>
              <b className="profile-b mx-2">20 followers</b>
              <b className="profile-b mx-2">20 following</b>
              <br />
              {profiledata[0].bio}
            </p>
          </div>
        </div>

        <hr className="profile-hr" />
        <p class=" d-inline p-2">
          <i class="bi bi-grid-3x3"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-grid-3x3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5V5h4V1zM5 6H1v4h4zm1 4h4V6H6zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5zm1 0v4h4v-4zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11zm0-1h4V6h-4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11zm-1 0V1H6v4z" />
          </svg>{" "}
          Posts
        </p>
        <i className="fa fa-video" > Reels </i>
        <div className="explore-grid">
        {Profile1.map((image)=>{
          return(
            <PostGrid image={image}/>
          )
        })}
        </div>
      </div>
    </>
  );
}
export default Profile;
