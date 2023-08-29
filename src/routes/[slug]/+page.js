import { GroupsData } from "../../models/GroupsData";

export function load({ params }) {
    return GroupsData.find((group) => group.name.toLowerCase().split(" ")[0] === params.slug.toLowerCase().split("-")[0]);
}