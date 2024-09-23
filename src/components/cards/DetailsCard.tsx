import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import TicketComment from "../ui/TicketComment";

export default function DetailsCard() {
  return (
    <Card
      className="max-w-[400px] md:max-w-[50%] mx-auto bg-[#0c120e] 
     border-[0.5px] border-[#3c5c60] border-opacity-70 "
    >
      <CardHeader className="flex gap-3 bg-[#232e27] ">
        <div className="flex flex-col">
          <p className=" text-[14px]">
            <span>#123</span> -{" "}
            <span className="text-[#93e309] font-semibold">Open</span>
          </p>
          <p className=" text-gray-500 text-[12px]">
            Created by{" "}
            <span className=" text-white font-semibold">AuthorName </span>
            at December 10th 2025
          </p>
          <p className="text-lg text-white font-semibold">Ticket Title</p>
        </div>
      </CardHeader>
      <Divider className="bg-[#242726] " />
      <CardBody className="py-3">
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter className="bg-[#232e27]">
        <TicketComment />
      </CardFooter>
    </Card>
  );
}
