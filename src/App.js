import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const res = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=66e45ce613374adeaae5b4eab34c0eff',
      );
      setData(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
