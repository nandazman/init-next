import cn from "classnames";

export default function ProgressBar({ className, progress = 0 }) {
  return (
    <div className={cn(className, "flex justify-between items-center gap-x-32px")}>
      <div className="bg-background relative w-full rounded-5px h-[17px]">
        <div
          className="absolute left-0 top-0 bg-orange h-full rounded-5px"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <h4 className="text-black">{progress}%</h4>
    </div>
  );
  
}