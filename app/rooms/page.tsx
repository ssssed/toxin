"use client";

import {useSession} from "next-auth/react";

export default function Rooms() {
  const {data: session} = useSession();
  console.log(session?.user.email, session?.user.lastname);
  return <main>Rooms</main>;
}
