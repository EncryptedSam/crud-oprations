import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

export class UserData implements InMemoryDbService{
    createDb(){
        let userDetails = [
            new User(101, "Aravind", "aravind@gmail"),
            new User(102, "Sravanthi", "sravanthi@gmail"),
            new User(103, "Divya", "divya@gmail")
        ]
        return {users:userDetails};
    }
}