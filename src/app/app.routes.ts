import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Characters } from './pages/characters/characters';
import { AddCharacter } from './pages/characters/add-character/add-character';
import { CharacterDetail } from './pages/characters/character-detail/character-detail';
import { UpdateCharacter } from './pages/characters/update-character/update-character';
import { AddSkill } from './pages/characters/skill/add-skill/add-skill';
import { UpdateSkill } from './pages/characters/skill/update-skill/update-skill';
import { AddRanking } from './pages/characters/ranking/add-ranking/add-ranking';
import { TierList } from './pages/tier-list/tier-list';
import { UpdateRanking } from './pages/characters/ranking/update-ranking/update-ranking';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "home", component: Home },
    { path: "characters", component: Characters },
    { path: "characters/add", component: AddCharacter },
    { path: "characters/update/:id", component: UpdateCharacter },
    { path: "characters/:id", component: CharacterDetail },
    { path: "characters/:id/ranking/add", component: AddRanking },
    { path: "characters/:id/ranking/update", component: UpdateRanking },
    { path: "skill/:skillId/character/:characterId/update", component: UpdateSkill },
    { path: "skill/character/:id/add", component: AddSkill },
    { path: "tier-list", component: TierList },
    { path: "**", component: Home }
];
