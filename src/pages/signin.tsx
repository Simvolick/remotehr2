//signin page

import { getSession, useSession } from "next-auth/react";
import { getProviders, signIn, getCsrfToken } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function SignIn({
                                                                                                                                                                                                                                                                      providers,
                                                                                                                                                                                                                                                                    }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(providers);

  const [email, setEmail] = useState("");

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            remote<span className="text-[hsl(280,100%,70%)]">HR</span>.ru
          </h1>
          <div className="grid-cols sm:grid-cols grid gap-4 md:gap-8">
            {/* if providers not null... */}
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <div
                    key={provider.name}
                    className="flex max-w-xs flex-col items-center rounded-xl bg-white/10 p-6 text-white hover:bg-white/20"
                  >
                    <div className="">
                      {/* If provider is email, create a form to enter and submit email */}

                      {provider.name === "Email" && (
                        <div>
                          <p className="text-2xl">{provider.name}</p>
                          <form
                            method="post"
                            action="/api/auth/signin/email"
                            className="text-center"
                          >
                            <input name="csrfToken" type="hidden" />
                            <input
                              onChange={(e) => setEmail(e.target.value)}
                              id="email"
                              name="email"
                              type="text"
                              placeholder="email@example.com"
                              className="my-2 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                          </form>
                        </div>
                      )}
                      <div className="">
                        <button
                          onClick={() => signIn(provider.id, { email })}
                          className="my-2 w-full rounded-md border border-gray-300 px-4 py-2 text-2xl font-bold shadow-sm focus:border-indigo-900 focus:outline-none focus:ring-indigo-900 sm:text-sm flex"
                        >
                          Sign in with {provider.name}
                          {provider.name === "Yandex" && (
                          <Image className="p-0.5" src="/signin/yandex-logo.svg" width={20} height={20} alt="yandex logo" />
                        )}
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

export async function getServerSideProps(context: any) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: await getProviders(),
    },
  };
}
