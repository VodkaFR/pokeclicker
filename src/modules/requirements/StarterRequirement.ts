import {
    AchievementOption, Region, RegionalStarters, Starter,
} from '../GameConstants';
import { pokemonList } from '../pokemons/PokemonList';
import Requirement from './Requirement';

export default class StarterRequirement extends Requirement {
    constructor(private region: Region, private starter: Starter) {
        super(starter, AchievementOption.equal);
    }

    public getProgress() {
        return player.regionStarters[this.region]();
    }

    public hint(): string {
        const starter = pokemonList.find((p) => p.id === RegionalStarters[this.region][this.starter]).name;
        return `Requires ${starter} to be chosen as your ${Region[this.region]} starter Pokémon`;
    }
}