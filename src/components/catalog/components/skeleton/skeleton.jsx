import { SkeletonCard } from "./components/skeleton-card";

export const Skeleton = () => (
  <div>
    <div className="flex justify-between items-center gap-12">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
    <div className="flex justify-between items-center gap-12">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  </div>
);
