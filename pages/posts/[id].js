const Post = ({ data }) => {
  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};
export default Post;

export async function getStaticPaths() {
  return {
    paths: ["/posts/post-1", "/posts/post-2", "/posts/post-3"],
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  return {
    props: {
      data: {
        params,
      },
    },
  };
}
