import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  // const botGuilds = await fetchApi("/api/guilds/bot");

  if (!session) {
    return <span>You are not supposed to be there :(</span>;
  }

  return (
    <span>
      {session.user.guilds.map((guild) => (
        <div key={guild.id}>{guild.name || "noname"}</div>
      ))}
    </span>
  );
}
