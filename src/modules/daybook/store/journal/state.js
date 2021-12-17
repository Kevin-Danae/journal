// export default () => {}

export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      picture: null,
    },
  ],
});
