export interface Perk {
  id: number;
  key: string;
  icon: string;
  name: string;
  slots: Slot[];
}

interface Slot {
  runes: Rune[];
}

interface Rune {
  id: number;
  key: string;
  icon: string;
  name: string;
  shortDesc: string;
  longDesc: string;
}
