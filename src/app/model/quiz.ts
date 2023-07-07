import { Formation } from './formation';

export class Questions {
  titre: string;
  type: string;
  responses: {
    type: {
      valeur: string;
      isValid: boolean;
      idUsers: string[];
    }[];
  };

  constructor() {
    this.titre = '';
    this.type = '';
    this.responses = { type: [] };
  }
}

export class User {
  username: string;
  email: string;
}

export class Quiz {
  _id: string;
  refFormation: string | Formation;
  titre: string;
  questions: (string | Questions)[];
  users: {
    user: string | User;
    score: number;
  }[];
  score: number;

  constructor();
  constructor(
    _id: string,
    refFormation: string | Formation,
    titre: string,
    questions: (string | Questions)[],
    users: {
      user: string | User;
      score: number;
    }[],
    score: number
  );
  constructor(
    _id?: string,
    refFormation?: string | Formation,
    titre?: string,
    questions?: (string | Questions)[],
    users?: {
      user: string | User;
      score: number;
    }[],
    score?: number
  ) {
    this._id = _id || '';
    this.refFormation = refFormation || '';
    this.titre = titre || '';
    this.questions = questions || [];
    this.users = users || [{ user: '', score: 0 }];
    this.score = score || 0;
  }
}
