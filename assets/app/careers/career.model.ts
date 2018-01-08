export class Career {
  name: string;
  description: string;
  universities: string;
  certificaton: string;
  resource: string;
  idtask?: string;

  constructor(name: string, description: string, universities: string, certification: string, resource: string, idtask?: string) {
      this.name = name;
      this.description = description;
      this.universities = universities;
      this.certificaton = certification;
      this.resource = resource;
      this.idtask;
   }
}
