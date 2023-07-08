export interface Offre {
  _id?: String;
  name: String;
  description: String;
  list_plat: [
    {
      name: String;
      description: String;
      quantity: Number;
    }
  ];
}
