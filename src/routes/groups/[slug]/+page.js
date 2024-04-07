import { GroupsData } from "$lib/models/GroupsData";
import { goto } from "$app/navigation";

export function load({ params }) {
    return GroupsData.find(g => g.slug === params.slug ?? goto("/"));
}