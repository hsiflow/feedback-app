function App() {
  const title = 'Blog Post';
  const body = 'This is my blog post';
  const comments = [
    { id: 1, text: 'Great post!' },
    { id: 2, text: 'Thanks for sharing!' },
    { id: 3, text: 'Very informative.' }
  ];

  const loading = false;
  const showComments = true;
  if (loading) return <h1>Loading...</h1>;

  const commentBlock = (
    <div className='comments'>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>)

  return (
		<div className='container'>
			<h1>{title.toUpperCase()}</h1>
			<p>{body}</p>

			{showComments && commentBlock}
		</div>
	);
}
export default App