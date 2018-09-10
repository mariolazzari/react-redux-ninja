const initState = {
  posts: [
    {
      id: "1",
      title: "Post 1",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit recusandae doloremque adipisci labore aliquid officia, possimus ab voluptatem natus perferendis, optio architecto dolorum omnis ullam! Amet aut obcaecati magni cumque?"
    },
    {
      id: "2",
      title: "Post 2",
      body: -"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore hic harum autem quibusdam, similique quisquam, suscipit doloribus, ut dolore iste libero officia ea maxime ullam porro aut nam repudiandae consequuntur."
    },
    {
      id: "3",
      title: "Post 3",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima sequi saepe, assumenda corporis asperiores itaque dignissimos, nobis, eveniet sit soluta expedita dolor doloremque voluptatibus? Temporibus recusandae cupiditate eum quo hic."
    }
  ]
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  return state;
};

export default rootReducer;
