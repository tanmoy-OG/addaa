const MessageSkeleton = () => {
  return (
    <div className="">
      <div className="my-2 flex w-96 flex-col gap-4">
        <div className="skeleton h-4 w-40"></div>
        <div className="skeleton h-4 w-96"></div>
        <div className="skeleton h-4 w-80"></div>
      </div>
      <div className="flex justify-end">
        <div className="flex w-96 flex-col gap-4">
          <div className="skeleton h-4 w-40"></div>
          <div className="skeleton h-4 w-96"></div>
          <div className="skeleton h-4 w-80"></div>
        </div>
      </div>
    </div>
  );
};
export default MessageSkeleton;
