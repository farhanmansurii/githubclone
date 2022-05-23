import { data, repositories } from "autoprefixer";
import React , {useEffect , useState} from "react";
import Repository from "./Repository";
import Loader from "./Loader";
const UserDetails = ({ data, repositories }) => {
  return (<>


    <div className="align-center">
      <div className=" flex flex-row relative w-3/4 ml-52 mb-12 mt-12 font-sans font-semibold">
        <div><img
          src={data.avatar_url}
          className="ml-12 align-center rounded-full p-2 m-2 avatar w-64 h-64"
        /></div>
        <div className='ml-12 col-start-3  col-span-2'>
          <div className="text-3xl mb-5 ">{data.name}</div>
          <div className="flex flex-col gap-4">
            <ul className="">
              <li>{data.bio} </li>
              <li className="flex row"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>{data.location} </li>
              <li>{data.twitter_url}</li>
            </ul>
          </div>
        </div>
        </div>

        <section className="flex flex-wrap justify-center">
          {repositories.map((repo) => (
            <Repository key={repo.id} repo={repo} user={data.name} />
          ))}
        </section>
      </div>
    </>
  );
};

export default React.memo(UserDetails);
