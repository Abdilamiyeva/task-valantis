export const SkeletonCard = () => (
    <div className="border rounded w-full mb-3">
    <div className="flex flex-col justify-center items-center space-y-4 mb-3">
      <div className="h-[220px] w-full bg-gray-200 animate-pulse"></div>
      <div className="flex items-center w-[250px]  flex-col space-y-2">
        <div className="h-6 w-[200px] rounded-lg bg-gray-200 animate-pulse"></div>
        <div className="h-6 w-[100px] rounded-lg bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  </div>
);
