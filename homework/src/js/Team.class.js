/* eslint-disable guard-for-in */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже существует!');
    }
    return this.members.add(character);
  }

  addAll(...character) {
    for (let i = 0; i < character.length; i += 1) {
      this.members.add(character[i]);
    }
  }

  toArray(character) {
    return Array.from(this.members.add(character));
  }
}

const myTeam = new Team();

export default myTeam;
