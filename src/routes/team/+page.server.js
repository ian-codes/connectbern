import { redirect } from "@sveltejs/kit";
import { featureFlags } from "$lib/featureFlags.js";

export function load() {
    if (!featureFlags.teamPage) {
        throw redirect(302, "/");
    }
}
