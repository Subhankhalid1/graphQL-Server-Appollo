let posts = [
  { id: "1", title: "GraphQL Basics", content: "Learn GraphQL step by step." },
  {
    id: "2",
    title: "Apollo Server Setup",
    content: "How to set up Apollo Server for GraphQL.",
  },
];

const resolvers = {
  Query: {
    posts: () => posts,
    post: (_, { id }) => posts.find((post) => post.id === id),
  },
  Mutation: {
    createPost: (_, { title, content }) => {
      const newPost = { id: `${posts.length + 1}`, title, content };
      posts.push(newPost);
      return newPost;
    },
  },
};

module.exports = resolvers;
