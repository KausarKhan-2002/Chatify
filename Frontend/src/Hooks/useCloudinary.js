import axios from "axios";

export function useCloudinary() {
  const uploadImage = async (selectFile, setCloudinaryImg) => {
    console.log("Uploading to Cloudinary...");

    if (!selectFile) {
      console.error("No file selected for upload.");
      return;
    }

    try {
      const cloud_name = "dsble6dtc"; // Fixed space issue
      const formData = new FormData();
      formData.append("file", selectFile);
      formData.append("cloud_name", cloud_name);
      formData.append("upload_preset", "chatify");

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      );

      console.log("Cloudinary Response:", res.data);
      setCloudinaryImg(res.data.secure_url); // Store uploaded image URL in state
      console.log("Cloudinary Response:", res.data);
    } catch (err) {
      console.error(
        "Error uploading image:",
        err.response?.data || err.message
      );
    }
  };

  return uploadImage;
}
