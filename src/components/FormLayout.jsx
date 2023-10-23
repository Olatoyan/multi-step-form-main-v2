function FormLayout({ children }) {
  return (
    <form className="pt-[4.1rem] px-24 flex flex-col mid:px-16 bg-white sma:-mt-28 mx-8 sma:px-[2.4rem] sma:mb-32 sma:py-8 sma:rounded-2xl sma:shadow-form">
      {children}
    </form>
  );
}

export default FormLayout;
