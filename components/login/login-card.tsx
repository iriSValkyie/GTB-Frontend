"use client";
import { IconBrandDiscordFilled } from "@tabler/icons-react";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { redirect } from "next/navigation";
export default function LoginCard() {
  const login = () => {
    const scopes = encodeURIComponent("identify guilds");
    const client_id = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;
    const redirect_url = process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URL;
    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_url}&response_type=code&scope=${scopes}`;

    redirect(discordAuthUrl);
  };

  return (
    <Card className=" max-w-[400px] ">
      <CardHeader>Login</CardHeader>
      <Divider />
      <CardBody className="p-8">
        <Button
          className="bg-indigo-500"
          startContent={<IconBrandDiscordFilled />}
          onPress={login}
        >
          Sign in with Discord
        </Button>
      </CardBody>
    </Card>
  );
}
