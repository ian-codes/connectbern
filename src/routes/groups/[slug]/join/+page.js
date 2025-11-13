// [slug]/join/+page.js
import { GroupsData } from "$lib/models/GroupsData";
import { redirect } from "@sveltejs/kit";

export const prerender = false;

export function load({ params }) {
    const data = GroupsData.find(g => g.slug === params.slug);

    if (!data) {
        throw redirect(301, "/");
    }

    // For collections, return the data to show the page (except non-commercial-marketplaces)
    if ((data.isCollection || params.slug === 'active-facebook-groups') && params.slug !== 'non-commercial-marketplaces') {
        return { group: data };
    }

    throw redirect(301, data?.link);
}
