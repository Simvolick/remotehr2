// template for a page
import Head from "next/head";
import { NextPage } from "next";

const PostJob: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Post a Job</title>
        <meta name="description" content="RemoteHR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            remote<span className="text-[hsl(280,100%,70%)]">HR</span>.ru
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
        </div>
      </main>
    </>
  );
};

export default PostJob;
