import firebase from "firebase/app";
import "firebase/firestore";
import Link from "next/link";
export default function Index({ posts }) {
  return (
    <div>
      <div className="container py-20">
        <h1 className="text-4xl font-bold mb-8">Posts</h1>
        {posts &&
          posts.map((item) => {
            return (
              <div
                className="p-4 border border-gray-400 my-4 font-bold"
                key={item.slug}
              >
                {item.title}
                <div>
                  <Link href={item.slug}>
                    <a className="bg-blue-500 text-white px-4 py-2 mt-3 inline-block">
                      Read post
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  var firebaseConfig = {
    apiKey: "AIzaSyCng0R-3FKRbeWjPe68uamTpSm66WSRI34",
    authDomain: "mate-mislov.firebaseapp.com",
    databaseURL: "https://mate-mislov.firebaseio.com",
    projectId: "mate-mislov",
    storageBucket: "mate-mislov.appspot.com",
    messagingSenderId: "295720003725",
    appId: "1:295720003725:web:2a26d8c60dd89cba7a9ac4",
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.firestore();
  const posts = [];
  try {
    const postDocs = await db.collection("posts").get();
    postDocs.forEach((doc) => {
      const data = doc.data();
      posts.push({ slug: `/post/${doc.id}`, title: data.title });
    });
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}
