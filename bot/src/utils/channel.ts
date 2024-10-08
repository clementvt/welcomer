import { Guild, TextBasedChannel, TextChannel } from "discord.js"
import WelcomerClient from "../structure/WelcomerClient"


export const fetchTextChannel = async (channelId: string, client: WelcomerClient): Promise<TextBasedChannel> => {
    let channel = client.channels.cache.get(channelId)
    if (!channel || !channel.isTextBased()) throw new Error("Channel not found or the channel is not a text channel");
    return channel
}