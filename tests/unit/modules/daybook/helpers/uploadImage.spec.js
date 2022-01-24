import cloudinary from "cloudinary";
import axios from "axios";
import uploadImage from "@/modules/daybook/helpers/uploadImage";

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

describe("Pruebas en el uploadImage", () => {
  test("debe de cargar archivo y retornar un url", async (done) => {
    const imgUrl =
      "https://res.cloudinary.com/df3zovdj9/image/upload/v1641158073/vue/hhtpifjstwbcp6xxiwxb.jpg";

    const { data } = await axios.get(imgUrl, {
      responseType: "arraybuffer",
    });

    const file = new File([data], "test.jpg");
    const url = await uploadImage(file);

    expect(typeof url).toBe("string");

    // TOMAR EL ID
    const segments = url.split("/");
    const imgId = segments[segments.length - 1].replace(".jpg", "");
    cloudinary.v2.api.delete_resources(imgId, {}, () => {
      done();
    });
  });
});
