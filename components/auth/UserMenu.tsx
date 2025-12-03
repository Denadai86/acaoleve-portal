'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export function UserMenu() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span className="text-gray-500">Carregando...</span>;
  }

  if (!session) {
    return (
            <button
              onClick={() =>
                signIn("google", {
                  prompt: "select_account",
                })
              }
              className="
                flex items-center gap-3 
                px-5 py-2 
                bg-black
                border border-gray-500
                rounded-lg 
                shadow-sm 
                hover:shadow-md 
                transition 
                text-white
                font-medium
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
                className="w-5 h-5"
              >
                <path
                  fill="#4285F4"
                  d="M488 261.8c0-17.4-1.6-34.1-4.6-50.3H249v95.1h135.7c-5.9 31.6-23.5 58.4-50.1 76.4v63.6h81c47.4-43.7 74.4-108 74.4-184.8z"
                />
                <path
                  fill="#34A853"
                  d="M249 492c67.8 0 124.6-22.5 166.1-61.1l-81-63.6c-22.5 15.1-51.4 24-85.1 24-65.5 0-121-44.2-140.7-103.7H23.4v65.2C64.4 435.4 149.2 492 249 492z"
                />
                <path
                  fill="#FBBC05"
                  d="M108.3 287.6c-4.8-14.3-7.5-29.7-7.5-45.6s2.7-31.3 7.5-45.6v-65.2H23.4C8.4 172 0 210.1 0 248s8.4 76 23.4 107.2l84.9-67.6z"
                />
                <path
                  fill="#EA4335"
                  d="M249 97.4c37 0 70.4 12.7 96.7 37.6l72.5-72.5C373.6 22.1 316.8 0 249 0 149.2 0 64.4 56.6 23.4 140.8l84.9 65.2C128 141.7 183.5 97.4 249 97.4z"
                />
              </svg>

              <span>Entrar com Google</span>
            </button>

    );
  }

  return (
    <div className="flex items-center gap-3">
      <Image
        src={session.user?.image || '/avatar-default.png'}
        alt="avatar"
        width={40}
        height={40}
        className="rounded-full"
      />

      <span className="text-gray-700">{session.user?.name}</span>

      <button
        onClick={() => signOut()}
        className="text-red-600 font-semibold hover:underline"
      >
        Sair
      </button>
    </div>
  );
}
