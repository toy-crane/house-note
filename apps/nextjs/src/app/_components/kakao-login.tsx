"use client";

import { createClient } from "~/utils/supabase/client";

const KakaoLogin = () => {
  const kakaoSignUp = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <button
      className="text-foreground mb-2 rounded-md bg-green-700 px-4 py-2"
      onClick={kakaoSignUp}
    >
      Kakao Login
    </button>
  );
};

export default KakaoLogin;
