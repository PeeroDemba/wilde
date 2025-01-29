import { FaStar } from "react-icons/fa";

function ReviewItems({
  name,
  date,
  review,
  stars,
}: {
  name: string;
  date: string;
  review: string;
  stars: number;
}) {
  return (
    <div className="flex flex-col gap-2 py-8 border-b border-[#ccc]">
      <div className="flex gap-1 items-center">
        <div className="flex items-center gap-1">
          {Array.from({ length: stars }).map((_, i) => (
            <FaStar color="#273f2bb3" key={i} />
          ))}
          {Array.from({ length: 5 - stars }).map((_, i) => (
            <FaStar color="#ccc" key={i} />
          ))}
        </div>
        <p className="ml-1">{stars}/5</p>
      </div>
      <p className="text-[#555] text-[18px]">
        {name}, {date}
      </p>
      <p className="text-[20px] mt-4">"{review}"</p>
    </div>
  );
}

export default ReviewItems;
