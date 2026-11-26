// Twitch emotes of Gatto's Pizzeria (page /GattosPizzeria/twitch).
// Keep in sync with the game: Assets/Game/Scripts/Twitch/ChatEmotes.cs and Editables/TwitchChatGuide.md.

import { ASSET_BASE } from "./config";

export const CHAT_LIMIT = 150;

/**
 * emoticon: the classic emoticon that also works (any case, 0 for O), shown in the tooltip.
 * color: pastel background behind the face (light enough not to hide the eyes and mouth).
 */
export const EMOTES = [
    { code: "lost", emoticon: "O_o", color: "#e3e3e8", name: "Oops!", does: "Panics, a “!” pops up and the oops sound plays", image: `${ASSET_BASE}/emotes/lost.webp` },
    { code: "love", emoticon: "<3", color: "#ffc8d8", name: "Love", does: "Heart eyes and floating hearts", image: `${ASSET_BASE}/emotes/love.webp` },
    { code: "wow", emoticon: ":O", color: "#ffe8a0", name: "Wow", does: "Surprised face and a little victory dance", image: `${ASSET_BASE}/emotes/wow.webp` },
    { code: "cry", emoticon: ":(", color: "#c2e0ff", name: "Cry", does: "Sad face with tears", image: `${ASSET_BASE}/emotes/cry.webp` },
    { code: "happy", emoticon: ":)", color: "#c9f0d6", name: "Happy", does: "A big happy smile", image: `${ASSET_BASE}/emotes/happy.webp` },
    { code: "tongue", emoticon: ":p", color: "#f5b37c", name: "Cheeky", does: "A cheeky wink", image: `${ASSET_BASE}/emotes/tongue.webp` },
] as const;

/**
 * Classic emoticons -> emote code, as a word of their own (same rules as the game's ChatEmotes.FromEmoticons).
 * Applied before cleaning the text: cleaning removes the "<" of "<3".
 */
const EMOTICONS: [RegExp, EmoteCode][] = [
    [/(?<!\S)[oO0]_[oO0](?=$|[\s.,!?])/g, "lost"],
    [/(?<!\S)<3(?=$|[\s.,!?])/g, "love"],
    [/(?<!\S):[oO0](?=$|[\s.,!?])/g, "wow"],
    [/(?<!\S):\((?=$|[\s.,!?])/g, "cry"],
    [/(?<!\S):\)(?=$|[\s.,!?])/g, "happy"],
    [/(?<!\S):[pP](?=$|[\s.,!?])/g, "tongue"],
];

export const fromEmoticons = (text: string) =>
    EMOTICONS.reduce((t, [regex, code]) => t.replace(regex, `:${code}:`), text);

export type EmoteCode = (typeof EMOTES)[number]["code"];

/** What the viewer is writing: a chat message while inside, a greeting (!join) or a goodbye (!bye). */
export const MODES = [
    { prefix: "", label: "Chat while inside", short: "Chat", command: "", hint: "Shown in a speech bubble over your customer's head while they're in the pizzeria." },
    { prefix: "!join ", label: "Greeting", short: "Hello", command: "!join", hint: "Your customer says it when they sit down. Typing !join puts you in the queue." },
    { prefix: "!bye ", label: "Goodbye", short: "Bye", command: "!bye", hint: "Your customer says it when they leave. You can send it before or during your visit." },
] as const;

export type ModePrefix = (typeof MODES)[number]["prefix"];

/** "Random example" button: each one fills the message and explains what happens in the game. */
export const EXAMPLES: { prefix: ModePrefix; text: string; why: string }[] = [
    { prefix: "!join ", text: "Ciao chef! :love:", why: "A greeting. You join the queue, and when your turn comes your customer sits down, says “Ciao chef!” and gets heart eyes with hearts floating around." },
    { prefix: "!join ", text: ":wow: Is this the famous pizzeria?", why: "The emote is first, so your customer is surprised and does the victory dance as soon as they sit down, waits a moment, then asks the question." },
    { prefix: "!join ", text: ":lost:", why: "Only an emote: your customer panics with a “!” and the oops sound, then says a normal greeting from the game." },
    { prefix: "", text: "Wait... where is my wallet?! :lost:", why: "The bubble types the text, pauses for a second of tension, and then your customer panics: “!” over the head and the oops sound." },
    { prefix: "", text: "This smells amazing :love: I could eat ten of these", why: "The emote is in the middle: the typing stops, hearts appear, and after a short pause the rest of the message keeps typing." },
    { prefix: "", text: "PINEAPPLE?! :wow:", why: "Your customer reads it out loud and then jumps into the victory dance with a surprised face." },
    { prefix: "", text: "they forgot my extra cheese :cry:", why: "The sad face and the tears stay while this bubble is on screen, then the face goes back to normal." },
    { prefix: "", text: ":love:", why: "Only an emote while you're inside: no bubble, your customer just gets the heart eyes and the hearts." },
    { prefix: "", text: "chef... :cry: ...is that MY pizza? :wow:", why: "Two emotes in one message: first the tears, a pause, more text, another pause, and then the surprised victory dance." },
    { prefix: "!bye ", text: "Grazie, see you tomorrow :cry:", why: "A goodbye. Saved now, said when your customer leaves after eating: “Grazie, see you tomorrow”, and then the tears." },
    { prefix: "", text: "best. pizza. ever. :)", why: "Emoticons work too: :) is the same as :happy:, so your customer smiles while the bubble is on screen." },
    { prefix: "", text: "I ate the last slice :p", why: ":p is the same as :tongue: — a cheeky wink. Try <3, :O, :( and O_o too." },
    { prefix: "!bye ", text: ":love: Best pizza in town!", why: "A goodbye that starts with hearts: your customer gets heart eyes, waits a moment, and says “Best pizza in town!” on the way out." },
];

/** Chat commands, shown under the writer. */
export const COMMANDS = [
    { command: "!join", text: "Join the queue to visit the pizzeria as a customer. Add text to say it when you sit down." },
    { command: "!bye", text: "Set what your customer says when they leave." },
    { command: "!leave", text: "Leave the queue (only while you're still waiting)." },
    { command: "any message", text: "While your customer is inside, it appears over their head." },
] as const;
