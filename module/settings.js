import { SYSTEM_NAME } from "./constants.js";
export const registerSystemSettings = () => {
    /**
     * Track the system version upon which point a migration was last applied
     */
    game.settings.register(SYSTEM_NAME, "systemMigrationVersion", {
        name: "System Migration Version",
        scope: "world",
        config: false,
        type: String,
        default: ""
    });
    /**
     * Register resting variants
     */
    game.settings.register(SYSTEM_NAME, "maxEdgePerRound", {
        name: "shadowrun6.settings.maxEdgePerRound.name",
        hint: "shadowrun6.settings.maxEdgePerRound.hint",
        scope: "world",
        config: true,
        type: Number,
        default: 2,
        onChange: (max) => {
            console.log("SR6E | maxEdgePerRound adjusted to " + max);
            game.settings.set(SYSTEM_NAME, "maxEdgePerRound", max);
            //      game.actors.forEach(actor => {
            //        if (actor.type == "character") {
            //          actor.prepareData();
            //        }
            //      });
        }
    });
    game.settings.register(SYSTEM_NAME, "importToCompendium", {
        name: "shadowrun6.settings.importToCompendium.name",
        hint: "shadowrun6.settings.importToCompendium.hint",
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
        onChange: (toggle) => {
            console.log("SR6E | importToCompendium changed to " + toggle);
            game.settings.set(SYSTEM_NAME, "importToCompendium", toggle);
        }
    });
};