import { Organization } from "./Organization"
import { TypeOfDon } from "./TypeOfDon"

export interface Don{
  _id: string
  RefOrganization: Organization,
  Target: number,
  Description:string,
  ProgessValue:number,
  RefTypeOfDon:TypeOfDon
  Dons: [
    {
      resto: string,
      plat:string
      quantite: number,
    },
  ], 
  
}