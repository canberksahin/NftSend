const GradientCard = ({ title, description, isAbsolute }: any) => (
  <div
    className={`card_gradient px-7 py-14 border-4 border-cyan-300 w-full md:w-3/12 mb-4 ${
      isAbsolute ? 'md:absolute md:-top-72 md:left-96' : ''
    }`}
  >
    <div className="flex flex-wrap w-full flex-col">
      <h1 className="sm:text-3xl text-4xl font-medium title-font text-white mb-10">{title}</h1>
      <p className="w-full text-white text-2xl leading-8">{description}</p>
    </div>
  </div>
);

export default GradientCard;
