import { AnySelectMenuInteraction, ButtonInteraction, ChatInputCommandInteraction, Guild, InteractionResponse, Message, ModalMessageModalSubmitInteraction, SlashCommandBuilder, SlashCommandOptionsOnlyBuilder } from "discord.js";
import WelcomerClient from "../structure/WelcomerClient";

export interface modalType {
    customId: string;
    execute(interaction: ModalMessageModalSubmitInteraction, client: WelcomerClient, ...options: any): Promise<void>
}

export interface CommandType {
    name: string;
    description: string;
    admin?: boolean;
    noDefer?: boolean;
    ephemeral?: boolean;
    data: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder;

    execute(interaction: ChatInputCommandInteraction|ButtonInteraction, client: WelcomerClient, ...options: any): Promise<void | Message<boolean> | InteractionResponse<boolean>>
}

export interface EventType {
    prodEvent?: boolean
    cluster?: boolean
    name: string,
    once?: boolean,
    execute(...args: any): Promise<void | InteractionResponse<boolean> | Message<boolean>>,
}

export interface ButtonType {
    customId: string;
    execute(interaction: ButtonInteraction, client: WelcomerClient, ...options: any): Promise<void | InteractionResponse<boolean> | Message<boolean>>
}

export interface SelectMenuType {
    customId: string;
    ephemeral?: boolean;
    execute(interaction: AnySelectMenuInteraction, client: WelcomerClient, ...options: any): Promise<void | InteractionResponse<boolean> | Message<boolean>>

}

export type PartialGuild = {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permissions: string;
    features: string[];
};

export interface GuildFormated {
    id: string;
    welcomer: Module;
    leaver: Module;
    mutual?: boolean;
    _tempData?: Guild
    _id?: string;
    imageGallery? : imageGallery[]
}

export type Channel = {
    id: string;
    name: string;
    type: number;
    permissions: string;
};

export type Role = {
    id: string;
    name: string;
    permissions: string;
};

export type Member = {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    roles: string[];
    permissions: string;
};

export interface Module {
    enabled: boolean;
    channel: string | null;
    message: string;
    dm: DmModule;
    image: ImageModule;
    embed: EmbedModule;
    webhook: WebhookModule;
};

export type ImageModule = {
    enabled: boolean;
    backgroundId: string;
    theme: string;
};

export type EmbedModule = {
    enabled: boolean;
    title: string;
    description: string;
    color: string;
    footer: EmbedModuleFooter;
    timestamp: boolean;
};

export type EmbedModuleFooter = {
    enabled: boolean;
    text: string;
    icon: string;
};

export type WebhookModule = {
    enabled: boolean;
    id: string;
    name: string;
    avatar: string;
};

export type DmModule = {
    enabled: boolean;
    message: string;
    image: {
        enabled: boolean;
        url: string;
    },
    embed: EmbedModule

};

export type imageGallery = {
    id: string;
    url: string;
    name: string;
}