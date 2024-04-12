import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { User } from "@/modules/user/models/user.entity";
import { Not, Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  // find the user by openId
  async findByOpenId(openId: string) {
    return this.userRepository.findOne({
      where: {
        open_id: openId
      }
    })
  }

  // create the user
  async create(user: Partial<User>){
    const userEntity = await this.userRepository.create(user)
    return this.userRepository.save(userEntity)
  }

  // Get the userInfo BY userId
  async findById(id: string) {
    return this.userRepository.findOne({
      where: {
        id
      }
    })
  }

  // Get the whole userInfo
  async findAllUsersExcept(id: string): Promise<User[]> {
    console.log("🚀 ~ UserService ~ findAllUsersExcept ~ id:", id)
    
    return await this.userRepository.createQueryBuilder('user')
      .where('user.id != :id', {id})
      .getMany()
  }
}