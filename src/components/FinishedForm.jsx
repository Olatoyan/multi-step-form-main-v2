import Thanks from "/icon-thank-you.svg";

function FinishedForm() {
  return (
    <form className="my-auto px-24 flex flex-col sma:px-8">
      <img src={Thanks} alt="thanks" className="self-center mb-[3.2rem]" />
      <h3 className="text-denim text-[3.2rem] sma:text-[2.4rem]  font-bold text-center mb-[1.6rem]">
        Thank you!
      </h3>
      <p className="text-grey text-[1.6rem] leading-10 text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </form>
  );
}

export default FinishedForm;
