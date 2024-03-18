"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h1 className="text-3xl font-bold">Shopping List</h1>
          <p>
            Signed in as {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut} className="hover:underline">Logout</button>
          <Link href="/week-8/shopping-list">
            <div className="hover:underline font-bold">Go to Shopping List</div>
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold m-2">Shopping List</h1>
          <p className="m-2"> Please sign in to continue:</p>
          <button className="m-2 hover:underline" onClick={handleSignIn}>
            Sign in with GitHub
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;