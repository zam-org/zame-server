import m from "mithril";

import zeroframe from "../ZeroFrame";

const MapData = {
    maps: [],
    refreshMaps(offset: number = 0, limit: number = 20) {
        // Refresh map list
        if (zeroframe == undefined) {
            console.error("ZeroFrame element is null in Maps component")
            return;
        }

        // Select all maps and save data
        zeroframe.cmdp("dbQuery", 
                     `SELECT * from map LIMIT ${limit} OFFSET ${offset}`,
                ).then((results: any[]) => {
            console.log(`Got ${results.length} maps.`)
            if (results.length > 0) {
                (MapData.maps as any) = results;
            }
            m.redraw();
        });
    }
};

export default MapData;