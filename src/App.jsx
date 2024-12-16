import React from "react";
import { useState } from "react";

const App = () => {
  const [username, setusername] = useState("");
  const [details, setdetails] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [allUsers, setallUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    const trimmedDetails = details.trim();
    const trimmedImageUrl = imageUrl.trim();
    if (trimmedDetails && trimmedImageUrl && trimmedImageUrl) {
      var arr = [...allUsers, { username, details, imageUrl }];
      setallUsers(arr);
    } else {
      alert("you have to fill all Fields");
    }
    setusername("");
    setimageUrl("");
    setdetails("");
    console.log(arr);
  };
  return (
    <div className="bg-gray-400 h-screen w-full">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="p-4"
      >
        <input
          className="px-4 py-2 border-2 border-black outline-none rounded "
          type="text"
          placeholder="Enter username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
          value={username}
        />
        <input
          className="px-4 py-2 border-2 border-black outline-none rounded ml-2"
          type="text"
          placeholder="Enter Details"
          onChange={(e) => {
            setdetails(e.target.value);
          }}
          value={details}
        />
        <input
          className="px-4 py-2 border-2 border-black outline-none rounded ml-2"
          type="text"
          placeholder="Enter Image URL"
          onChange={(e) => {
            setimageUrl(e.target.value);
          }}
          value={imageUrl}
        />
        <br />
        <button className="bg-blue-500 px-4 py-2 rounded-md  mt-2 text-white">
          Create Profile
        </button>
      </form>
      {allUsers.length > 0 ? (
        allUsers.map((elem,index) => (
          <div 
          
          className="px-20 py-5 bg-gray-300 p-2  flex  gap-20  items-center mt-2" key={index}>
            <img 
            className="object-fit position-center h-60 w-60 rounded-full"
            src={elem.imageUrl} alt="" />
            
            <div className="details py-2  w-full">
            <h1 className="text-3xl capitalize font-bold text-blue-700">{elem.username}</h1>
            <h2 className="test-xl text-gray-500 mt-5">About {elem.username}...</h2>
            <p className="text-xl text-black mt-2">{elem.details}</p>
            </div>
            <div>
              <button className="bg-red-500 px-4 py-2 rounded-md mb-4 text-white">Delete Profile</button>
              <button className="bg-green-500 px-4 py-2 rounded-md mb-4 text-white">Edit Profile </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-2xl text-white px-4 bg-gray-400">No profile yet <br /> create profile</h1>
      )}
    </div>
  );
};

export default App;
