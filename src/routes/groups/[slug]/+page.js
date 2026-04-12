import { GroupsData } from "$lib/data/GroupsData";
import { goto } from "$app/navigation";

export function load({ params }) {
    return GroupsData.find(g => g.slug === params.slug ?? goto("/"));
}