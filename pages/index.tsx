import type { NextPage, GetServerSideProps } from "next";
import Template from "../components/base/Template";
import { getAllPostsData } from "../lib/posts";

interface PostProps {
  allPostsData: {
    id: string;
    date: string;
    title: string;
  }[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const allPostsData = getAllPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home: NextPage<PostProps> = ({ allPostsData }) => {
  return (
    <Template title="" description="" url="" author="">
      <h2>Blog </h2>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {id}
            <br />
            {title}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </Template>
  );
};

export default Home;
