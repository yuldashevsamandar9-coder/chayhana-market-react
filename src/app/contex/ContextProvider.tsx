import React, { ReactNode, useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { Member } from "../../lib/types/member";
import { GlobalContext } from "../hooks/useGlobal";

const cookies = new Cookies(); // Komponent tashqarisiga olib chiqildi

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Boshlang'ich state-ni to'g'ri va xavfsiz yuklash
  const [authMember, setAuthMember] = useState<Member | null>(() => {
    const hasToken = cookies.get("accessToken");
    const memberData = localStorage.getItem("memberData");

    if (!hasToken) {
      localStorage.removeItem("memberData");
      return null;
    }

    return memberData ? JSON.parse(memberData) : null;
  });

  const [orderBuilder, setOrderBuilder] = useState<Date>(new Date());

  // Side-effect komponent yuklangandan (mount bo'lgandan) keyin bajariladi
  useEffect(() => {
    if (!cookies.get("accessToken")) {
      localStorage.removeItem("memberData");
      setAuthMember(null);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{ authMember, setAuthMember, orderBuilder, setOrderBuilder }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
