import { EntityRepository, Repository } from "typeorm"
import { DescriptionEntity } from "../entities/description.entity"

@EntityRepository(DescriptionEntity)
export class DescriptionRepository extends Repository<DescriptionEntity> {}