import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { UpdateCredentialDto } from './dto/update-credential.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Credential } from './entities/credential.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CredentialService {

  constructor(
    @InjectRepository(Credential)
    private readonly credentialRepo: Repository<Credential>
  ){}
  async create(createCredentialDto: CreateCredentialDto) {
    const credential = this.credentialRepo.create(createCredentialDto);
    return await this.credentialRepo.save(credential);  
  }

  async findAll() {
    return await this.credentialRepo.find();
  }

  async findOne(id: string) {
    return await this.credentialRepo.findOne({where: {credentialId:id}});
  }

  async update(id: string, updateCredentialDto: UpdateCredentialDto) {
    const credential = await this.credentialRepo.findOne({where: {credentialId: id}});
    if(!credential) throw new NotFoundException();
    Object.assign(credential, updateCredentialDto);
    return await this.credentialRepo.save(credential);
  }

  async remove(id: string) {
    const credential = await this.credentialRepo.findOne({where: {credentialId: id}});
    if(!credential) throw new NotFoundException();
    return await this.credentialRepo.remove(credential);
  }
}
