import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Route Handler to handle signing in users with a magic link

export async function POST(request) {
  // getting the data from the form
  const formData = await request.formData();
  const email = formData.get("email");
  const type = formData.get("type") === "recovery" ? "recovery" : "magiclink";

  // initializing the supabase instance
  const supabaseAdmin = getSupabaseAdminClient();

  //
  const { data: linkData, error } = await supabaseAdmin.auth.admin.generateLink(
    {
      email,
      type,
    }
  );

  if (error) {
    return NextResponse.redirect(new URL(`/error?type=${type}`, request.url), {
      status: 302,
    });
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
    `/auth/verify?hashed_token=${hashed_token}&type=${type}`,
    request.url
  );

  // initialize the mailing transport
  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 54325,
  });

  const initailSentence =
    type === "recovery"
      ? "Hi there, you requested a password change!"
      : "Hi there, this is a custom magic link email!";

  const secondSentence =
    type === "recovery" ? "to reset password" : "to log in";

  // construct the email message
  const message = {
    from: "Atlas Innovation & Meta Solution , aims5824@example.com",
    to: email,
    subject: "Magic Link",
    html: `
    <h1>${initailSentence}</h1>
    <p>Click <a href="${constructedLink.toString()}">here</a> ${secondSentence} </p>
    `,
  };

  // send the email
  await transporter.sendMail(message);

  const thanksUrl = new URL(`/magic-thanks?type=${type}`, request.url);
  return NextResponse.redirect(thanksUrl, { status: 302 });
}
