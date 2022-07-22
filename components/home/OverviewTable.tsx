import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { times, round } from 'lodash';
import Filter from './Filter';

const collectionsQuery = gql`
  query {
    collections {
      name
      image
      stats {
        daily {
          change
          sales
          averagePrice
          volume
        }
        weekly {
          change
          sales
          averagePrice
          volume
        }
        monthly {
          change
          sales
          averagePrice
          volume
        }
        totalVolume
        totalSales
        totalSupply
        noOfNFTs
        noOfOwners
        averagePrice
        marketCap
        floorPrice
        noOfReports
      }
    }
  }
`;

const timeArray = ['daily', 'weekly', 'monthly'];

const OverviewTable = () => {
  const [time, setTime] = useState(timeArray[0]);

  const { data, loading } = useQuery(collectionsQuery);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <Filter time={time} setTime={setTime} timeArray={timeArray} />
          <div className="w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100 rounded-tl rounded-bl">
                    NFT Collection
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100">
                    Volume(ETH)
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100">
                    Marketcap(ETH)
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100">
                    #Transactions
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100">
                    Floor Price(ETH)
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100">
                    Avg Price(ETH)
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-semibold text-gray-900 text-sm bg-yellow-100">
                    Wallets
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading &&
                  times(10).map((item) => (
                    <tr key={item}>
                      <td className="px-4 py-5 text-sm">
                        <div className="animate-pulse bg-gray-200 h-5" />
                      </td>
                      <td className="px-4 py-5 text-sm">
                        <div className="animate-pulse bg-gray-200 h-5" />
                      </td>
                      <td className="px-4 py-5 text-sm">
                        <div className="animate-pulse bg-gray-200 h-5" />
                      </td>
                      <td className="px-4 py-5 text-sm">
                        <div className="animate-pulse bg-gray-200 h-5" />
                      </td>
                      <td className="px-4 py-5 text-sm">
                        <div className="animate-pulse bg-gray-200 h-5" />
                      </td>
                      <td className="px-4 py-5 text-sm">
                        <div className="animate-pulse bg-gray-200 h-5" />
                      </td>
                      <td className="px-4 py-5 text-sm">
                        <div className="animate-pulse bg-gray-200 h-5" />
                      </td>
                      <td className="px-4 py-5 text-sm">
                        <div className="animate-pulse bg-gray-200 h-5" />
                      </td>
                    </tr>
                  ))}
                {!loading &&
                  data &&
                  data.collections &&
                  data.collections.length !== 0 &&
                  data.collections.map((item: any) => (
                    <tr>
                      <td className=" px-4 py-5 text-sm">
                        <div className="flex items-center">
                          <img
                            alt="content"
                            className="object-contain object-center h-8 w-8 rounded-full mr-4"
                            src={item.image}
                          />
                          {item.name}
                        </div>
                      </td>
                      <td className="px-4 py-5 text-sm flex items-center">
                        {round(item.stats[time].volume, 2)}{' '}
                        <span
                          className={
                            Math.sign(item.stats[time].change) === -1
                              ? `text-red-500 flex items-center`
                              : `text-green-500 flex items-center`
                          }
                        >
                          {Math.sign(item.stats[time].change) === -1 ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 ml-2 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 ml-2 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7l4-4m0 0l4 4m-4-4v18"
                              />
                            </svg>
                          )}
                          {round(item.stats[time].change * 100, 2)}%
                        </span>
                      </td>
                      <td className="px-4 py-5 text-sm">
                        {round(item.stats.marketCap / 1000, 1)}k{' '}
                      </td>
                      <td className="px-4 py-5 text-sm text-gray-900">{item.stats[time].sales} </td>
                      <td className="px-4 py-5 text-sm">{item.stats.floorPrice ?? '-'}</td>
                      <td className="px-4 py-5 text-sm">
                        {round(item.stats[time].averagePrice, 3)}
                      </td>
                      <td className="px-4 py-5 text-sm">{item.stats.noOfOwners}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverviewTable;
