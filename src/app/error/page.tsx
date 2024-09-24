import { Button } from "@nextui-org/react";
import Link from "next/link";

const ErrorPage = ({ searchParams }) => {
  const { type } = searchParams;
  console.log(type);
  const knownErrors = ["login-failed"];
  return (
    <div className="text-center pt-10">
      <h2>Ooops!!! 🤭</h2>
      {!knownErrors.includes(type) && <p>An error occurred: {type}</p>}
      {type === "login-failed" && (
        <p>Please check your credentials and try again.</p>
      )}
      <p>If you continue to experience issues, please contact support.</p>

      <Button color="secondary" as={Link} href="/">
        Back to login
      </Button>
    </div>
  );
};

export default ErrorPage;
