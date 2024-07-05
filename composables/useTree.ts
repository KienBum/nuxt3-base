const useTree = (list: any[], id: string = 'id', parentId: string = 'parentId', name: string = 'name') => {
    var map: any = {},
        node,
        roots = [],
        i

    for (i = 0; i < list.length; i += 1) {
        map[list[i][id]] = i // initialize the map
        list[i].childs = [] // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
        node = list[i]

        node.label = node[name]
        node.id = node[id]
        if (
            node[parentId] != undefined &&
            node[parentId] != '0' &&
            list[map[node[parentId]]] != undefined
        ) {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node[parentId]]].childs.push(node)
        } else {
            roots.push(node)
        }
    }
    return roots
}
export default useTree