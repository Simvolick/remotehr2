
//signin page

import { useSession, getProviders, signIn, getCsrfToken } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next"
import { InferGetServerSidePropsType } from "next";

export default function SignIn({providers}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(providers)  
  return (
        <div>
          {Object.values(providers).map((provider) => {
            return (
              <div key={provider.name}>
                <button onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </button>
              </div>
            );
          })}
        </div>
      );
    };
    
    
export async function getServerSideProps() {
  return {
    props: {
      providers: await getProviders(),
    },
  };
}

