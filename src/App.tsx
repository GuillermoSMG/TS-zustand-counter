import { useCounterStore } from "./store/counter";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getPosts();
  }, []);

  const { count, title, posts } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );

  const { increment, reset, getPosts, multiply } = useCounterStore((state) => ({
    increment: state.increment,
    reset: state.reset,
    getPosts: state.getPosts,
    multiply: state.multiply,
  }));
  return (
    <div>
      <div>
        {title}: {count}
      </div>
      {count > 0 ? (
        <button onClick={() => increment(-1)}>decrement -1</button>
      ) : (
        <button disabled>decrement -1</button>
      )}
      <button onClick={() => increment(1)}>Increment +1</button>
      <button onClick={() => multiply(2)}>multiply by 2</button>
      <button onClick={() => reset()}>reset</button>
      <div>
        {posts.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
