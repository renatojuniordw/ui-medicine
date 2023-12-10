export interface Medicine {
  id?: number;
  key?: number;
  reference: string;
  activeIngredient: string;
  tradeName: string;
  holderOfSimilarMedicineRegistration: string;
  pharmaceuticalForm: string;
  concentration: string;
  inclusionDate: string;
  createdAt?: Date;
  updatedAt?: Date;
}
