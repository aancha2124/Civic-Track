import './Community.css';

function Community() {
  // Mock data to simulate community posts.
  // In a real application, you would fetch this data from a backend.
  const mockPosts = [
    {
      id: 1,
      title: 'Seeking volunteers for park cleanup this weekend!',
      content: 'We are organizing a community cleanup event at City Park this Saturday at 9 AM. All are welcome to join and help us keep our neighborhood clean!',
      author: 'Aanchal Bharadwaj',
    },
    {
      id: 2,
      title: 'Update on Main Street Pothole Repair',
      content: 'The city council has confirmed that the road maintenance crew will begin repairs on the large pothole on Main Street by next week. Thanks to everyone who reported it!',
      author: 'Admin',
    },
    {
      id: 3,
      title: 'Lost Dog in Green Valley',
      content: 'My dog, Buddy, went missing near the Green Valley community center. He is a small golden retriever mix with a blue collar. Please contact me if you see him!',
      author: 'Community Member',
    },
  ];

  return (
    <div className="page-container">
      <h2>Community Feed</h2>
      <p className="page-subtitle">This page shows community discussions and announcements from your area.</p>
      
      <ul className="community-feed">
        {mockPosts.map(post => (
          <li key={post.id} className="post-item">
            <div className="post-header">
              <h3>{post.title}</h3>
              <span className="post-author">by {post.author}</span>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button className="like-button">Like</button>
              <button className="comment-button">Comment</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Community;