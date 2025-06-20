import { useState } from 'react';
import Header from './components/Header.jsx';
import FeedbackList from './components/FeedbackList.jsx';
import FeedbackStats from './components/FeedbackStats.jsx';

import FeedbackData from './data/FeedbackData.js';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      // Filter out the feedback item with the given id
      // and update the state
      // This will remove the item from the feedback array
      // and trigger a re-render of the component
      // to reflect the changes
      // 篩選出不包含指定 id 的項目
      // 並更新狀態
      setFeedback(feedback.filter((item) => item.id !== id ))
    }
  } 

	return (
		<>
			<Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
