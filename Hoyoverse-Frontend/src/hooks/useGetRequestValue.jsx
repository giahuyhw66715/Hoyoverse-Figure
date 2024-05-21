export default function useGetRequestValue(item) {
    if (item == null) return { id: null, name: null };
    const id = item.split("-").at(-1);
    const name = convertSlugToTitle(item.replace(`-${id}`, ""));
    return { id, name };
}

function convertSlugToTitle(slug) {
    var words = slug.split("-");

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return words.join(" ");
}
