import Link from "next/link";
import { Button } from "@nextui-org/react";

import { FORM_TYPES } from "@/contants/formTypes";
import { urlPath } from "@/utils/url-helpers";

const MagicLinkSuccessPage = ({ searchParams, params }) => {
  const { type } = searchParams;
  const { tenant } = params;
  const isPasswordRecovery = type === FORM_TYPES.PASSWORD_RECOVERY;

  return (
    <div className=" text-center pt-10">
      <h1 className=" text-2xl font-bold mb-5">
        {isPasswordRecovery && "Password "}
        Magic On its Way !! 🪄
      </h1>
      <p className="text-gray-500">
        {isPasswordRecovery
          ? "Thanks! You should get a link to reset password in a few seconds"
          : "Thanks! You should get a link to login in a few seconds"}
      </p>
      <Button
        color="secondary"
        as={Link}
        href={urlPath("/", tenant)}
        className=" mt-5"
      >
        Go back
      </Button>
    </div>
  );
};

export default MagicLinkSuccessPage;
