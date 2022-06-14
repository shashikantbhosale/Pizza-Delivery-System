
export class BaseModel {
    Id!:number;
    Name:string;
    createdOn:Date | undefined;
    updatedOn:Date | undefined;
    // updatedBy : BaseModel;
    constructor() {
        this.Id = 0;
        this.Name="";
    }

}