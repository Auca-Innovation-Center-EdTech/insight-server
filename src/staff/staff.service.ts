import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './entities/staff.entity';

@Injectable()
export class StaffService {

  constructor(
    @InjectRepository(Staff) 
    private readonly staffRepo: Repository<Staff>
  ){}
  async create(createStaffDto: CreateStaffDto) {
    const staff = this.staffRepo.create(createStaffDto);
    return await this.staffRepo.save(staff);
  }

  async findAll() {
    return await this.staffRepo.find();
  }

  async findOne(id: number) {
    return await this.staffRepo.findOne({where: {id}})
  }

  async update(id: number, updateStaffDto: UpdateStaffDto) {
    const staff = await this.staffRepo.findOne({where: {id}});
    if(!staff) throw new NotFoundException("Staff not found");
    
    Object.assign(staff, updateStaffDto);
    return this.staffRepo.save(staff);
  }

  async remove(id: number) {
    const staff = await this.staffRepo.findOne({where: {id}});
    if(!staff) throw new NotFoundException("Staff not found");
    
    return this.staffRepo.remove(staff);
  }
}

