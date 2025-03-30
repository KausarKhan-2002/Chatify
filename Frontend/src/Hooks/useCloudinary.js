import axios from "axios";

export function useCloudinary() {
  return async (imgUrl, setCloudinaryImg) => {
    console.log("hello");
    
    try {
      const cloud_name = " dsble6dtc";
      
      const formData = new FormData();
      formData.append("file", imgUrl);
      formData.append("cloud_name", cloud_name);
      formData.append("upload_preset", "chatify");

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      );
      console.log(res);
    } catch (err) {
      console.log("Error:", err.message);
    }
  };
}
