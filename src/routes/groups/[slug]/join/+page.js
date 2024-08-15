// [slug]/join/+page.js
import { GroupsData } from "$lib/models/GroupsData";
import { redirect } from "@sveltejs/kit";

export function load({ params }) {
    const data = GroupsData.find(g => g.slug === params.slug);

    if (!data) {
        throw redirect(301, "/");
    }

    throw redirect(301, data?.link);
}
