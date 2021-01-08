import {Message} from 'discord.js';
import CommandHandler from './classes/CommandHandler';

export type RunFunction = (...options: any[]) => Promise<any>;

export type DefaultCommandRunFunction = (commandHandler: typeof CommandHandler, message: Message, args: string[]) => Promise<void>;
