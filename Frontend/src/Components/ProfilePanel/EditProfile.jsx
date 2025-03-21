import React, { useEffect, useRef, useState } from "react";
import { FaPen } from "react-icons/fa";
import { DEFAULT_PROFILE } from "../../utils/LINK";
import CropProfile from "./CropProfile";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Store/userSlice";
import { notification } from "../../utils/notification";
import { useNavigate } from "react-router-dom";
import { handleThrottling } from "../../utils/handleThrottling";

const EditProfile = () => {
  const defaultDes = "Hii there, I am using Chatify...";
  const user = useSelector((store) => store.userInfo);
  const [profileDescription, setProfileDescription] = useState(defaultDes);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [isCropModalVisible, setIsCropModalVisible] = useState(false);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setProfileDescription(user.description || defaultDes);
  }, [user]);

  const handleFileInput = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setProfileImage(url);
      setIsCropModalVisible(true);
    }
  };

  const handleUploadProfile = async () => {
    if (!croppedImage) {
      notification("warn", "Please crop an image first");
      return;
    }

    notification("info", "Profile uplading...", true);

    const formData = new FormData();
    formData.append("profileImage", croppedImage); // ✅ Send only cropped image
    formData.append("description", profileDescription);

    try {
      const res = await fetch("http://localhost:7000/user/update-profile", {
        method: "PATCH",
        body: formData,
        credentials: "include",
      });
      const json = await res.json();
      if (!json.success) {
        notification("warn", json.message);
        return;
      }

      dispatch(setUser(json.user));
      notification("success", json.message);
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };
  

  const handleNext = async () => {
    try {
      const res = await fetch("http://localhost:7000/user/update-user", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: profileDescription }),
        credentials: "include",
      });
      const json = await res.json();

      if (!json.success) {
        notification("warn", json.message);
        return;
      }

      notification("success", json.message);
      dispatch(setUser(json.user));
      navigate("/chats");
    } catch (err) {
      console.log("Error:", err.message);
    }
  };

  const throttleForNext = handleThrottling(handleNext, 2000)

  return (
    <section className="bg-slate-900 w-full h-[94vh] flex flex-col items-center justify-center px-5">
      <div className="flex flex-col items-center bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Profile Image */}
        <div className="relative">
          <img
            className="w-32 h-32 object-cover bg-slate-700 rounded-full border-4 border-gray-700 shadow-md"
            src={
              croppedImage
                ? URL.createObjectURL(croppedImage)
                : user.profilePicture
                ? user.profilePicture
                : DEFAULT_PROFILE
            }
          />
          <button
            onClick={handleFileInput}
            className="cursor-pointer absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            <FaPen size={12} />
          </button>
        </div>

        {/* File Input (Hidden) */}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleChange}
        />

        {croppedImage && (
          <button
            onClick={handleUploadProfile}
            className="bg-blue-800 cursor-pointer hover:bg-blue-700 transition duration-75 px-3 py-1 rounded-md mt-2"
          >
            Upload your profile
          </button>
        )}

        {/* Editable Description */}
        <p className="mt-6 mb-2 text-slate-400 font-semibold">About You</p>
        <div className="flex items-center w-full bg-slate-700 px-3 py-2 rounded-lg border border-slate-600 focus-within:border-blue-500">
          <input
            type="text"
            ref={inputRef}
            value={profileDescription}
            className="w-full bg-transparent text-slate-300 border-none outline-none"
            readOnly={isReadOnly}
            onChange={(e) => setProfileDescription(e.target.value)}
          />
          <FaPen
            onClick={() => {
              setIsReadOnly(false);
              inputRef.current.focus();
            }}
            className="ml-2 text-gray-400 cursor-pointer hover:text-gray-300 transition"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end mt-6 w-full">
          {/* <button className="w-24 py-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-600 transition">
            Skip
          </button> */}
          <button
            onClick={throttleForNext}
            className="w-24 py-2 bg-green-700 text-white rounded-md shadow-md hover:bg-green-600 transition cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>

      {isCropModalVisible && (
        <CropProfile
          selectProfile={profileImage}
          setSelectProfile={setProfileImage}
          setShowCropModel={setIsCropModalVisible}
          setCroppedImage={setCroppedImage}
        />
      )}
    </section>
  );
};

export default EditProfile;
