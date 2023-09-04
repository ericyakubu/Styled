import React, { useState } from "react";
import { storage } from "../../components/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Test: React.FC = () => {
  const [imageUpload, setImageUpload] = useState<File | undefined>();
  // const [imageURL, setImageURL] = useState(null);
  const uploadImage = () => {
    if (!imageUpload) return;
    const imageRef = ref(storage, `styled-users/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      getDownloadURL(imageRef).then((res) => console.log(res));
    });
  };

  return (
    <div>
      firebase
      <input
        type="file"
        name=""
        id=""
        onChange={(e) => {
          if (e.target.files) setImageUpload(e.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>upload image</button>
    </div>
  );
};

export default Test;
