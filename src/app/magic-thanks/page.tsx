import Link from "next/link";
import { Button } from "@nextui-org/react";

const MagicLinkSuccessPage = () => {
  return (
    <div className=" text-center pt-10">
      <h1 className=" text-2xl font-bold mb-5">Magic On its Way !! 🪄</h1>
      <p className="text-gray-500">
        Thanks! You should get a link to login in a few seconds
      </p>
      <Button color="secondary" as={Link} href="/" className=" mt-5">
        Go back
      </Button>
    </div>
  );
};

export default MagicLinkSuccessPage;
