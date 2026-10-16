"""Generate the tileable ingredient-silhouette backgrounds used by /GattosPizzeria.

Usage: python scripts/gattos-patterns.py
Writes one SVG per section color into public/games/gattos/patterns/.
Tweak PATTERNS below to change colors, then re-run.
"""
import os
import random

# Ingredient / kitchen silhouettes, 100x100 viewBox. (path, fill-rule)
SILHOUETTES = {
    "tomato": [("M50 30C76 28 92 46 90 66C88 86 70 95 50 95C30 95 12 86 10 66C8 46 24 28 50 30Z", "nonzero"),
               ("M50 38L34 22L47 27L50 8L55 27L70 19L60 36Z", "nonzero")],
    "mushroom": [("M8 54C8 26 28 10 50 10C72 10 92 26 92 54C92 60 86 62 80 60L20 60C14 62 8 60 8 54Z", "nonzero"),
                 ("M36 58L64 58L68 86C68 94 32 94 32 86Z", "nonzero")],
    "salami": [("M18 34H80A16 16 0 0 1 80 66H18A16 16 0 0 1 18 34Z M58 34H66V66H58Z", "evenodd"),
               ("M90 42L99 35V65L90 58Z", "nonzero")],
    "mozzarella": [("M50 28A32 32 0 1 1 49.9 28Z", "nonzero"),
                   ("M52 30C54 15 68 6 82 10C77 23 65 31 52 30Z", "nonzero")],
    "garlic": [("M50 6C52 20 58 26 70 34C88 46 90 72 78 84C68 94 32 94 22 84C10 72 12 46 30 34C42 26 48 20 50 6Z M49 40H51V84H49Z", "evenodd")],
    "basil": [("M50 52C30 42 20 22 28 6C46 14 56 32 50 52Z", "nonzero"),
              ("M50 52C70 42 80 24 74 8C56 14 44 32 50 52Z", "nonzero"),
              ("M47 50H53V94H47Z", "nonzero")],
    "olives": [("M28 36m-17 0a17 17 0 1 0 34 0a17 17 0 1 0 -34 0Z M28 36m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z", "evenodd"),
               ("M70 40m-17 0a17 17 0 1 0 34 0a17 17 0 1 0 -34 0Z M70 40m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z", "evenodd"),
               ("M48 72m-17 0a17 17 0 1 0 34 0a17 17 0 1 0 -34 0Z M48 72m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z", "evenodd")],
    "slice": [("M50 96L12 24Q50 0 88 24Z M44 42m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0Z M58 64m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z", "evenodd")],
    "rollingpin": [("M24 37H76A9 9 0 0 1 85 46V54A9 9 0 0 1 76 63H24A9 9 0 0 1 15 54V46A9 9 0 0 1 24 37Z", "nonzero"),
                   ("M1 45H17V55H1Z M83 45H99V55H83Z", "nonzero")],
    "dough": [("M6 72C6 42 28 26 50 26C72 26 94 42 94 72C94 78 88 80 50 80C12 80 6 78 6 72Z", "nonzero")],
    "ham": [("M18 34C30 12 72 10 86 34C98 56 84 88 54 90C24 92 4 62 18 34Z M30 46Q46 34 62 48Q46 42 30 50Z M40 66Q56 58 72 66Q56 64 40 70Z", "evenodd")],
    "paw": [("M50 52C66 52 78 66 76 78C74 90 62 88 50 88C38 88 26 90 24 78C22 66 34 52 50 52Z", "nonzero"),
            ("M22 42m-10 0a10 12 0 1 0 20 0a10 12 0 1 0 -20 0Z M40 24m-10 0a10 12 0 1 0 20 0a10 12 0 1 0 -20 0Z M60 24m-10 0a10 12 0 1 0 20 0a10 12 0 1 0 -20 0Z M78 42m-10 0a10 12 0 1 0 20 0a10 12 0 1 0 -20 0Z", "nonzero")],
    "pizza": [("M50 4A46 46 0 1 1 49.9 4Z M36 34m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0Z M64 40m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0Z M44 66m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0Z M70 68m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z", "evenodd")],
}


def pattern_svg(color: str, opacity: float = 1.0, seed: int = 4, tile: int = 520, cells: int = 4) -> str:
    """Return a tileable SVG with jittered, rotated ingredient silhouettes."""
    rng = random.Random(seed)
    names = list(SILHOUETTES)
    rng.shuffle(names)
    step = tile / cells
    parts = []
    k = 0
    for row in range(cells):
        for col in range(cells):
            name = names[k % len(names)]
            k += 1
            size = rng.uniform(52, 70)
            cx = col * step + step / 2 + rng.uniform(-12, 12) + (step / 2 if row % 2 else 0)
            cy = row * step + step / 2 + rng.uniform(-10, 10)
            rot = rng.uniform(-35, 35)
            s = size / 100
            g = "".join(f'<path d="{d}" fill-rule="{r}"/>' for d, r in SILHOUETTES[name])
            # Draw wrapped copies so the tile repeats seamlessly.
            for dx in (-tile, 0, tile):
                for dy in (-tile, 0, tile):
                    x, y = cx + dx, cy + dy
                    if -60 < x < tile + 60 and -60 < y < tile + 60:
                        parts.append(
                            f'<g transform="translate({x:.1f} {y:.1f}) rotate({rot:.1f}) scale({s:.3f}) translate(-50 -50)">{g}</g>'
                        )
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{tile}" height="{tile}" viewBox="0 0 {tile} {tile}">'
        f'<g fill="{color}" fill-opacity="{opacity}">{"".join(parts)}</g></svg>'
    )
    return svg



# name -> (silhouette color, seed). The section background color lives in CSS.
PATTERNS = {
    "morning": ("#EE8424", 3),        # on #F89733
    "morning-soft": ("#F7E3CB", 21),  # on #FFF4E6
    "day": ("#63C6EA", 22),           # on #49BAE3
    "night": ("#454B8E", 23),         # on #3B4080
    "neutral": ("#F1EEEA", 9),        # on #FFFFFF
}

if __name__ == "__main__":
    out = os.path.join(os.path.dirname(__file__), "..", "public", "games", "gattos", "patterns")
    os.makedirs(out, exist_ok=True)
    for name, (color, seed) in PATTERNS.items():
        with open(os.path.join(out, f"{name}.svg"), "w", encoding="utf-8") as f:
            f.write(pattern_svg(color, 1, seed=seed))
        print("wrote", name)
