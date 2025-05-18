import CommentsCardMobile from "../../molecules/HomePage/CommentsCardMobile";

const commentsData = [
  {
    name: "Elon Musk",
    title: "Senior Shitposter",
    image: "/images/code.png",
    message:
      "These Cards Are Amazing, I Want To Use Them In My Project. Framer Motion Is A Godsend Ngl Tbh Fam 🙏",
  },
  {
    name: "Jane Doe",
    title: "Product Designer",
    image: "/images/code.png",
    message: "Loved how smooth this is. Definitely adding it to my UI kit.",
  },
];

const CommentsMobile = () => {
  return (
    <div className="flex flex-col items-center  gap-8 py-8">
        <h2 className={`text-[28px] w-[350px] font-[600]`}>
              Some Of Our Respected Happy Clients Say
            </h2>
      <CommentsCardMobile comments={commentsData} />
    </div>
  );
};

export default CommentsMobile;
