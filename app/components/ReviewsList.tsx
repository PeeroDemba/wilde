import { MdCancel } from "react-icons/md";
import ReviewItems from "./ReviewItems";

function ReviewsList({
  setOpenReviews,
}: {
  setOpenReviews: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <section
      id="reviewslistsection"
      onClickCapture={() => {
        setOpenReviews(false);
      }}
      className="bg-[#273f2bb3]/80 z-[9999] fixed overflow-y-scroll top-0 left-0 flex justify-center items-center lg:py-20 w-screen min-h-screen"
    >
      <div
        className="flex justify-center items-center lg:pb-20 relative overflow-y-scroll top-0 left-0 w-full h-[100vh] lg:h-[75vh]"
        id="reviewslist"
      >
        <div
          onClickCapture={() => {
            setOpenReviews(true);
          }}
          className="bg-[#ebe0ce] rounded-md absolute top-0 px-10 py-12 lg:p-16 lg:w-2/3"
        >
          <div className="flex justify-between items-center">
            <p className="text-[24px]">Reviews</p>
            <MdCancel
              tabIndex={0}
              color="black"
              size="2rem"
              className="cursor-pointer focus-visible:border focus-visible:border-black focus-visible:rounded-none "
              onClick={() => {
                setOpenReviews(false);
              }}
            />
          </div>
          <ReviewItems
            stars={5}
            date="21/10/2024"
            name="andriana euth"
            review="The staff was wonderful. The place makes you feel incredibly at home, and their breakfast was very tasty. I will definitely go again.! <3"
          />
          <ReviewItems
            stars={4}
            date="21/10/2024"
            name="andriana euth"
            review="The staff was wonderful. The place makes you feel incredibly at home, and their breakfast was very tasty. I will definitely go again.! <3"
          />
          <ReviewItems
            stars={3}
            date="21/10/2024"
            name="andriana euth"
            review="The staff was wonderful. The place makes you feel incredibly at home, and their breakfast was very tasty. I will definitely go again.! <3"
          />
          <ReviewItems
            stars={2}
            date="21/10/2024"
            name="andriana euth"
            review="The staff was wonderful. The place makes you feel incredibly at home, and their breakfast was very tasty. I will definitely go again.! <3"
          />
          <ReviewItems
            stars={1}
            date="21/10/2024"
            name="andriana euth"
            review="The staff was wonderful. The place makes you feel incredibly at home, and their breakfast was very tasty. I will definitely go again.! <3"
          />
          <ReviewItems
            stars={0}
            date="21/10/2024"
            name="andriana euth"
            review="The staff was wonderful. The place makes you feel incredibly at home, and their breakfast was very tasty. I will definitely go again.! <3"
          />
          <div className="flex flex-col gap-4 mt-4 items-center">
            <button
              type="button"
              className="rounded-[4px] hover:bg-[#273f2b]/70 py-[14px] px-8 bg-[#273f2b] text-[#f3ece2]"
            >
              VIEW ALL REVIEWS
            </button>
            <button
              type="button"
              className="underline underline-offset-4 decoration-2 text-[18px] hover:text-[#273f2b]"
            >
              Close Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsList;
