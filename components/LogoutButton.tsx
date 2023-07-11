'use client';

import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const LogoutButton = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <button
      className="bg-btn-background hover:bg-btn-background-hover rounded-md px-4 py-2 no-underline"
      onClick={signOut}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
