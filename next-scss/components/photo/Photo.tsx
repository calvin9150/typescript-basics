import { GetListResponse } from "@/apis/types";

import styles from "@/styles/Photo.module.scss";

interface PhotoProps {
  data: GetListResponse;
}

function Photo({ data }: PhotoProps) {
  return (
    <div className={styles.container}>
      <p>id: {data.id}</p>
      <p>author: {data.author}</p>
      <img src={data.download_url} alt="photo" width="100%" height="150px" />
    </div>
  );
}

export default Photo;
