/* eslint-disable jsx-a11y/anchor-is-valid */
const BatchDrops = () => (
  <section className="text-gray-600 body-font">
    <div className="flex flex-col text-center w-full p-20">
      <h1 className="md:text-2xl font-medium title-font mb-4 text-white tracking-widest">
        Tokens Supported:
      </h1>
      <h2 className="gradient_text text:3xl md:text-4xl font-semibold">
        ERC-20, ERC-721, ERC-1155
      </h2>
    </div>
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="w-1/2 mb-10 md:mb-0">
        <img
          className="object-contain object-center rounded w-10/12"
          alt="hero"
          src="/images/batch_drop.png"
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font text-5xl md:text-7xl mb-12 font-medium text-white">
          No limit in Batch
          <br className="hidden lg:inline-block" />
          drops
        </h1>
        <p className="mb-8 leading-relaxed text-white text-2xl">
          As of now, NFT projects owners/collectors have trouble in batch sending NFTs to multiple
          addresses. We remove this hassle for you and enable unlimited batch sending for you.
        </p>
      </div>
    </div>
  </section>
);

export default BatchDrops;
