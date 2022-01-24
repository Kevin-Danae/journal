import axios from "axios";
const { CLOUD_NAME } = process.env;

const uploadImage = async (file) => {
  if (!file) return;

  try {
    const formData = new FormData();
    formData.append("upload_preset", "vue-daybook");
    formData.append("file", file);

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const { data } = await axios.post(url, formData);
    return data.secure_url;
  } catch (error) {
    console.log("ERROR AL CARGAR EL ARCHIVO", error);
    return null;
  }
};

export default uploadImage;
