import React, { useState, useEffect, useContext } from 'react';
import { getAISuggestions } from '../utils/aiServices';
import PageContext from "../page/PageContext";
import styles from './Community.module.css';

const CommunityPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const ctx = useContext(PageContext)
  const {changePage} = ctx
  useEffect(() => {
    // Fetch initial posts (could be from an API in a real app)
    setPosts([
      {
        id: 1,
        userId: 1,
        title: "I Need Help with My Baby’s Sleep Schedule",
        content: "I’m struggling to get my baby to sleep through the night. Any tips?",
        comments: [{ userId: 2, comment: "Try establishing a bedtime routine and keep the room dark!" }],
      },
      {
        id: 2,
        userId: 1,
        title: "Best Foods During Pregnancy",
        content: "What are some foods that helped you during pregnancy?",
        comments: [],
      },
      {
        id: 3,
        userId: 3,
        title: "Postpartum Mental Health Tips",
        content: "What are some ways to manage stress and anxiety after childbirth?",
        comments: [{ userId: 4, comment: "Journaling and light exercises really helped me!" }],
      },
      {
        id: 4,
        userId: 5,
        title: "Morning Sickness Remedies",
        content: "How did you deal with morning sickness in your first trimester?",
        comments: [{ userId: 6, comment: "Ginger tea and small frequent meals worked wonders for me!" }],
      }
    ]);
  }, []);

  const handlePostSubmit = () => {
    if (newPost.title && newPost.content) {
      const aiSuggestion = getAISuggestions(newPost.content);
      const newPostData = { id: posts.length + 1, userId: 1, title: newPost.title, content: newPost.content, comments: aiSuggestion ? [{ userId: 0, comment: aiSuggestion }] : [] };
      setPosts([newPostData, ...posts]);
      setNewPost({ title: '', content: '' });
    }
  };

  return (
    <div className={styles.container}>
      <h2>Community Discussions</h2>
      <div className={styles.newPost}>
        <input type="text" placeholder="Title" value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} />
        <textarea placeholder="Share your thoughts..." value={newPost.content} onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}></textarea>
        <button onClick={handlePostSubmit}>Post</button>
      </div>
      <div className={styles.posts}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <h4>Comments</h4>
            {post.comments.length > 0 ? (
              post.comments.map((comment, index) => <p key={index} className={styles.comment}>{comment.comment}</p>)
            ) : (
              <p className={styles.noComments}>No comments yet</p>
            )}
          </div>
        ))}
      </div>
      <button onClick={()=> changePage("dashboard")}>Back</button>
    </div>
  );
};

export default CommunityPage;
