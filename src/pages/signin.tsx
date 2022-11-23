//signin page

import {
  useSession,
  getProviders,
  signIn,
  getCsrfToken,
} from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";

export default function SignIn({
                                                                                                                  providers,
                                                                                                                }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(providers);
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            remote<span className="text-[hsl(280,100%,70%)]">HR</span>.ru
          </h1>
          <div className="grid-cols sm:grid-cols grid gap-4 md:gap-8">
            {/* if providers not null... */}
              {Object.values(providers !== null).map((provider) => {
              return (
                <div className="flex max-w-xs flex-col items-center gap-4 rounded-xl bg-white/10 p-6 text-white hover:bg-white/20">
                  <div className="">
                    
                    {/* If provider is email, create a form to enter and submit email */}

                    {provider.name === "Email" && (
                      <div>
                        <p className="text-2xl">
                        {provider.name}
                        </p>
                        <form
                          method="post"
                          action="/api/auth/signin/email"
                          className="text-center"
                        >
                          <input
                            name="csrfToken"
                            type="hidden"
                          />
                          <input
                            name="email"
                            type="text"
                            placeholder="email@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm my-2"
                          />
                        </form>
                      </div>
                    )}
                    <div key={provider.name}>
                      <button
                        onClick={() => signIn(provider.id)}
                        className="text-2xl font-bold w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-900 focus:border-indigo-900 sm:text-sm my-2"
                      >
                        Sign in with {provider.name}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      providers: await getProviders(),
    },
  };
}
