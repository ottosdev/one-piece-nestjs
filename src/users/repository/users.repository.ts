import { EntityRepository, Repository } from "typeorm";
import { UsersEntity } from "../entity/users.entity";

@EntityRepository(UsersEntity)
export class UsersRepository extends Repository<UsersEntity> {}