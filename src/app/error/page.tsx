import { Button } from "@nextui-org/react";
import Link from "next/link";

const ErrorPage = ({ searchParams }) => {
  const { type } = searchParams;
  console.log(type);
  const knownErrors = ["login-failed", "magiclink", "invalid_magiclink"];
  return (
    <div className="text-center pt-10">
      <h2>Ooops!!! 🤭</h2>
      {!knownErrors.includes(type) && <p>An error occurred: {type}</p>}
      {type === "login-failed" && (
        <p>Please check your credentials and try again.</p>
      )}
      {type === "magiclink" && (
        <p>
          We couldn't find your account to send the magic link. Please check
          your email and try again.
        </p>
      )}

      {type === "invalid_magiclink" && (
        <p>
          Something went wrong verifying the OTP token, it seems to be invalid.
          Try resending another magic link. 😃
        </p>
      )}
      <p>If you continue to experience issues, please contact support.</p>

      <Button color="secondary" as={Link} href="/">
        Back to login
      </Button>
    </div>
  );
};

export default ErrorPage;
