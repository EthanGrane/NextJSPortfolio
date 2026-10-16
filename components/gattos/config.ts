// Content and links for the Gatto's Pizzeria landing page (English only).
// Edit values here instead of hunting through the components.

export const STEAM_URL = "https://store.steampowered.com/app/3137770/Gattos_Pizzeria/";

// YouTube URL of the trailer. While empty, the "Trailer" button is hidden.
export const TRAILER_URL = "";

export const ASSET_BASE = "/games/gattos";

const img = (name: string) => `${ASSET_BASE}/shot-${name}.webp`;

export const TAGLINE = "Bake authentic Neapolitan pizzas in your grandpa's restaurant!";

// One block per time of day, shown in this order while scrolling.
export const DAY_PHASES = [
    {
        id: "morning",
        label: "Morning",
        title: "Open grandpa's pizzeria",
        text: "Knead the dough, chop fresh ingredients and fire up the oven before the first customers walk in.",
        image: img("dining-room"),
        alt: "The pizzeria dining room in the morning light",
    },
    {
        id: "day",
        label: "Day",
        title: "Here comes the rush!",
        text: "Orders pile up. Cook every pizza by hand, step by step, and keep your customers happy.",
        image: img("slicing"),
        alt: "Slicing ingredients with an Excellent rating",
    },
    {
        id: "night",
        label: "Night",
        title: "Upgrade your restaurant",
        text: "Spend what you earned on new recipes, ingredients, ovens and decorations.",
        image: img("ingredients"),
        alt: "Unlocking salami as a new ingredient in the shop",
    },
] as const;

export const SCREENSHOTS = [
    { src: img("dining-room"), alt: "The pizzeria dining room" },
    { src: img("kitchen"), alt: "The kitchen in the afternoon light" },
    { src: img("dough"), alt: "Rolling out pizza dough" },
    { src: img("cooking-pot"), alt: "Cooking tomato sauce on the stove" },
    { src: img("ingredients-shelf"), alt: "Fresh ingredients on the shelf" },
    { src: img("tickets"), alt: "Customer order tickets" },
    { src: img("slicing"), alt: "Slicing ingredients with an Excellent rating" },
    { src: img("washing-up"), alt: "Washing a pot full of bubbles" },
    { src: img("oven"), alt: "The wood-fired oven" },
] as const;

// Add milestones here as they get announced. `done: true` marks reached ones.
export const ROADMAP = [
    { date: "February 2027", title: "Launch on Steam", text: "Gatto's Pizzeria opens its doors.", done: false },
];
