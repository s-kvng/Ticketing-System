import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Route Handler to handle signing in users with a magic link

export async function POST(request) {
  // getting the data from the form
  const formData = await request.formData();
  const email = formData.get("email");

  // initializing the supabase instance
  const supabaseAdmin = getSupabaseAdminClient();

  //
  const { data: linkData, error } = await supabaseAdmin.auth.admin.generateLink(
    {
      email,
      type: "magiclink",
    }
  );

  if (error) {
    return NextResponse.redirect(
      new URL("/error?type=magiclink", request.url),
      { status: 302 }
    );
  }

  // A workaround to prevent generateLink() from creating new user when email is not available
  if (linkData?.properties) {
    const user = linkData.user;
    const { hashed_token, verification_type } = linkData.properties;

    if (verification_type === "signup") {
      await supabaseAdmin.auth.admin.deleteUser(user.id);
      return;
    }
  }

  // send a one time password link to the email provided
  // const { data, error } = await supabase.auth.signInWithOtp({
  //   email,
  //   options: {
  //     shouldCreateUser: false,
  //   },
  // });

  // extracting the hashed_token from the link
  const { hashed_token } = linkData.properties;

  // construct a custom link with the hashed_token
  const constructedLink = new URL(
    `/auth/verify?hashed_token=${hashed_token}`,
    request.url
  );

  // initialize the mailing transport
  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 54325,
  });

  //
  // construct the email message
  const message = {
    from: "Atlas Innovation & Meta Solution , aims5824@example.com",
    to: email,
    subject: "Magic Link",
    html: `
    <h1>Hi there, this is a custom magic link email</h1>
    <p>Click <a href="${constructedLink.toString()}">here</a> to log in </p>
    `,
  };

  // send the email
  await transporter.sendMail(message);

  const thanksUrl = new URL("/magic-thanks", request.url);
  return NextResponse.redirect(thanksUrl, { status: 302 });
}
