import { useEffect, useState } from "react";

import { getList } from "@/apis/list";
import { GetListResponse } from "@/apis/types";

import Photo from "@/components/photo/Photo";

import styles from "@/styles/Exam.module.scss";

function Exam() {
  const [photoData, setPhotoData] = useState<GetListResponse[] | null>([]);

  useEffect(() => {
    getList().then((data) => {
      if (data.length) {
        setPhotoData(data);
      }
    });
  }, []);

  const printPhotos = () => {
    return photoData?.map((v) => <Photo data={v} />);
  };

  console.log("photoData", photoData);

  return (
    <>
      <div>Hi</div>
      <div className={styles.container}>{printPhotos()}</div>
    </>
  );
}

export default Exam;
