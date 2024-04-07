import { GroupsData } from "$lib/models/GroupsData";

export const prerender = false;

export function load({ params }) {
    return GroupsData.find(g => g.slug === params.slug);
}