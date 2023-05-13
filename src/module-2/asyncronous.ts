const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = 'data is fetched to server successfully!';
    if (data) {
      resolve(data);
    } else {
      reject('failed to fetch data');
    }
  });
};

const getPromise = async (): Promise<string> => {
  const data = await makePromise();

  return data;
};

//Boolean Promise

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject('failed to fetch data');
    }
  });
};

const getPromiseBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();

  return data;
};

//oblect promise

interface IDataType {
  data: string;
}

const makePromiseObject = (): Promise<IDataType> => {
  return new Promise<IDataType>((resolve, reject) => {
    const data: IDataType = { data: 'data is fetched to server successfully!' };
    if (data) {
      resolve(data);
    } else {
      reject('failed to fetch data');
    }
  });
};

const getPromiseObject = async (): Promise<IDataType> => {
  const data = await makePromiseObject();

  return data;
};

//Json Placeholder
interface ITodo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
};

const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};
getTodoData();
