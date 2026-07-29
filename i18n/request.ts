import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { routing } from "./routing";

export default getRequestConfig(async () => {
    const cookieStore = await cookies();
    const locale =
        cookieStore.get("NEXT_LOCALE")?.value ?? routing.defaultLocale;

    console.log("🔍 next-intl locale resuelto:", locale);

    try {
        const messages = (await import(`../messages/${locale}.json`)).default;
        console.log("✅ mensajes cargados:", Object.keys(messages));
        return { locale, messages };
    } catch (err) {
        console.error("❌ error cargando mensajes:", err);
        throw err;
    }
});