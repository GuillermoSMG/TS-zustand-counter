import { create } from "zustand";
interface Post {
  id: number;
  title: string;
  body: string;
}

interface CounterState {
  count: number;
  title: string;
  posts: Post[];
  increment: (value: number) => void;
  reset: () => void;
  getPosts: () => Promise<void>;
  multiply: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 0,
  title: "Contador",
  posts: [],
  increment: (value: number) =>
    set((state) => ({
      count: state.count + value,
    })),
  reset: () =>
    set(() => ({
      count: 0,
    })),
  getPosts: async () => {
    const posts = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    set((state) => ({
      ...state,
      posts,
    }));
  },
  multiply: (value: number) => {
    const { count } = get();
    set({
      count: count * value,
    });
  },
}));
