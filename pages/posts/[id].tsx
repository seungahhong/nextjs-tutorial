import type { ReactElement } from "react";
import type { NextPage, GetServerSideProps } from "next";

import Template from "../../components/base/Template";
import { getPostData } from "../../lib/posts";
import { markdownRenderStyles } from "../../styles/markdownStyles";

interface PostProps {
  id: string;
  date: string;
  title: string;
  contentHtml: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      ...postData,
    },
  };
};

const Posts: NextPage<PostProps> = ({ id, date, title, contentHtml }) => {
  return (
    <Template title="" description="" url="" author="">
      <h2>Posts Test</h2>
      {id}
      <br />
      {title}
      <br />
      {date}
      <br />
      <article
        className={markdownRenderStyles}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </Template>
  );
};

export default Posts;
