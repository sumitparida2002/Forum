import React, { useEffect, useState } from "react";
import { getPosts } from "../../actions/post";

const Content = () => {
  const [noteData, setNoteData] = useState({
    title: "",
    message: "",
    creator: "",
  });
  const fetchNotes = async () => {
    const data = await getPosts().then((result) => setNoteData(result.data[0]));
  };
  useEffect(() => {
    fetchNotes();
    console.log(noteData);
  }, []);

  return <div>hello</div>;
};

export default Content;
