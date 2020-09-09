import firebase from "firebase/app";
import "firebase/firestore";

export default function Post({ post }) {
  return <div className="container p-8 bg-blue-200">{post && post.title}</div>;
}

export async function getStaticPaths() {
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
      posts.push(doc.id);
    });
  } catch (error) {
    console.log(error);
  }

  return {
    paths: posts.map((post) => ({
      params: {
        id: post,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
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

  try {
    const doc = await db.collection("posts").doc(params.id).get();

    if (!doc.exists) {
      return {
        props: { posts: null },
      };
    } else {
      return {
        props: {
          post: Object.assign({}, doc.data()),
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
}
