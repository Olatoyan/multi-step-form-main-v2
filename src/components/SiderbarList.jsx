import { useForm } from "../contexts/FormContexts";

function SiderbarList({ num, text }) {
  const { steps } = useForm();
  return (
    <div className="flex items-center gap-6">
      <div
        className={`${
          steps === num
            ? "bg-sky-blue border-sky-blue"
            : "border-white bg-transparent"
        }  h-[3.3rem] w-[3.3rem] rounded-full flex items-center justify-center border`}
      >
        <p
          className={`${
            steps === num ? "text-denim" : "text-white"
          }  text-[1.4rem] tracking-[0.1rem] uppercase font-bold`}
        >
          {num}
        </p>
      </div>
      <div className="flex flex-col mid:hidden">
        <p className="text-light-blue text-[1.2rem] uppercase">Step {num}</p>
        <p className="text-[1.4rem] text-white font-bold uppercase tracking-[0.1rem]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default SiderbarList;
