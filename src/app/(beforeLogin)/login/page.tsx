"use client";

import { useRouter } from "next/navigation";
import Main from "../_components/Main";
import { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/i/flow/login");
  }, [router]);

  return <Main />;
};

export default LoginPage;
