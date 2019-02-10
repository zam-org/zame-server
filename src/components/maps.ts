import m from "mithril";
import MapData from "./map-data";

// Map display component
const Maps = {
    oncreate(vnode: m.VnodeDOM<any, any>) {
        // Get latest maps
        MapData.refreshMaps();
    },

    view(vnode: m.Vnode<any, any>) {
        // Table with map info
        return m("div", [
            m("h1", "Maps"),
            m("table",
                MapData.maps.map((map: any, index: number) => {
                    return m("tr",
                        m("td", (index + 1) + "."),
                        m("td", map["id"]),
                        m("td", map["cert_user_id"]),
                    );
                }),
            ),
        ]);
    },

};

export default Maps;
