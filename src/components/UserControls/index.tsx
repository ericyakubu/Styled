import React, { useEffect, useRef, useState } from "react";
import classes from "./UserControls.module.scss";
import { storage } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { FileUploader } from "react-drag-drop-files";
import { FaPen } from "react-icons/fa";

const UserControls: React.FC = () => {
  const [imageURL, setImageURL] = useState<string>("");
  const [imgFile, setImgFile] = useState<File | null>(null);
  const fileTypes = ["JPG", "PNG"];
  const previewRef = useRef<HTMLImageElement>(null);

  //TODO fix this
  console.log(imageURL);

  const handleImage = (file: File) => {
    if (file === null) return;
    setImgFile(file);
  };

  const handleUploadImage = () => {
    if (imgFile === null) return;
    const imageRef = ref(storage, `styled-users/${imgFile.name + v4()}`);
    uploadBytes(imageRef, imgFile).then(() => {
      getDownloadURL(imageRef)
        .then((res) => setImageURL(res))
        .catch((err) => console.log(err));
    });
  };

  useEffect(() => {
    if (previewRef.current && imgFile) {
      previewRef.current.src = URL.createObjectURL(imgFile);
    }
  }, [imgFile]);

  return (
    <div className={classes.container}>
      <div className={classes.info_container}>
        <img
          className={classes.img_current}
          src="https://placehold.jp/150x150.png"
          alt="current image"
        />
        <div className={classes.name_pass}>
          <p>
            user name <FaPen />
          </p>
          <button>change password</button>
        </div>
      </div>
      <div className={classes.img_update_container}>
        <FileUploader
          handleChange={handleImage}
          name="file"
          types={fileTypes}
          hoverTitle="Drop here"
        />
        <img
          className={classes.img_preview}
          src=""
          alt="preview image"
          ref={previewRef}
        />
        {/* <input
        type="file"
        name=""
        id=""
        onChange={(e) => {
          setImageUpload(e.target.files[0]);
        }}
      /> */}
        <button onClick={handleUploadImage}>upload image</button>
      </div>
    </div>
  );
};

export default UserControls;
