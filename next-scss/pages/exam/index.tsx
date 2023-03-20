import { getList } from "@/apis/list";
import { GetListResponse } from "@/apis/types";

import Photo from "@/components/photo/Photo";

import styles from "@/styles/Exam.module.scss";

interface ExamProps {
  list: GetListResponse[];
}

function Exam({ list }: ExamProps) {
  const printPhotos = () => {
    return list?.map((v) => <Photo data={v} />);
  };

  return (
    <>
      <div>Hi</div>
      <div className={styles.container}>{printPhotos()}</div>
    </>
  );
}

export const getStaticProps = async () => {
  let list: GetListResponse[] = [];
  await getList().then((res) => {
    list = res;
  });

  return {
    props: { list },
  };
};

export default Exam;
