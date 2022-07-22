import GradientCard from '../elements/GradientCard';

const DropAgainstCollections = () => (
  <section
    className="relative text-gray-600 body-font py-16"
    style={{
      backgroundImage: 'url("/images/drop_bg.png")',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
    }}
  >
    {/* <div className="absolute bg_fade_gradient w-full h-full top-0 px-32" /> */}
    <div className="lg:flex-grow lg:px-24 md:px-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font text-3xl md:text-7xl mb-12 font-medium text-white">
        Drop against <br className="hidden lg:inline-block" />
        collections
      </h1>
      <p className="mb-8 leading-relaxed text-white text-2xl md:w-6/12">
        Our tool enables users to drop against collection of your own choice and not just that. You
        can also specify the attributes you want to choose to filter our addresses you want to drop
        your NFT’s against.
      </p>
      <div className="flex w-full justify-end px-5 md:px-0">
        <div className="flex justify-between flex-col md:flex-row relative w-full md:w-4/6">
          <GradientCard
            title="Top Traders"
            description="You can also automatically drop against top traders of collections."
          />
          <GradientCard
            title="Top Holders"
            description="You can drop against the top asset holders of any collection automatically."
            isAbsolute
          />
          <GradientCard
            title="Portfolio"
            description="You can also choose to filter the addresses according to their holdings."
          />
        </div>
      </div>
    </div>
  </section>
);

export default DropAgainstCollections;
