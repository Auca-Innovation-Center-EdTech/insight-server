import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Institution } from './entities/institution.entity';

@Injectable()
export class InstitutionService {

  constructor(
    @InjectRepository(Institution)
    private readonly institutionRepo: Repository<Institution>
  ){}

  async create(createInstitutionDto: CreateInstitutionDto) {
    const institution = this.institutionRepo.create(createInstitutionDto);
    return this.institutionRepo.save(institution);
  }

  async findAll() {
    return await this.institutionRepo.find();
  }

  async findOne(id: number) {
    return this.findOne(id);
  }

  async update(id: number, updateInstitutionDto: UpdateInstitutionDto) {
    const institution = await this.institutionRepo.findOne({where: {id}});
    if(!institution){
      throw new NotFoundException();
    }

    Object.assign(institution, updateInstitutionDto);
    return this.institutionRepo.save(institution);
  }

  async remove(id: number) {
    const institution = await this.institutionRepo.findOne({where: {id}});
    if(!institution){
      throw new NotFoundException();
    }

    return this.institutionRepo.remove(institution);
  }
}
