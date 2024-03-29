"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>User signed in: {JSON.stringify(session.data.user)}</div>;
  }

  return <div>Not signed in</div>;
}
