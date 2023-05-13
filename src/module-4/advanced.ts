//Properties

interface Model<TData, TMethods> {
  data: TData;
  methods: TMethods;
}

interface IUsers {
  firstName: string;
  lastName: string;
}

//Methods
interface IMethods {
  fullName(): string;
}

type model = Model<IUsers, IMethods>;

class Users implements model {
  data: IUsers;
  methods: IMethods;

  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.methods = {
      fullName: () => `${firstName}  ${lastName}`,
    };
  }
}

const users1 = new Users('Mahfuz', 'Alam');

console.log(users1.methods.fullName());
