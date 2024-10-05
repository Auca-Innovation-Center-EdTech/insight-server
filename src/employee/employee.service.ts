import { Employee } from 'src/employee/entities/employee.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {

  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>
  ){}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeeRepo.create(createEmployeeDto);
    return await this.employeeRepo.save(employee);
  }

  async findAll() {
    return await this.employeeRepo.find();
  }

  async findOne(id: number) {
    return await this.employeeRepo.findOne({where: {id}})
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeeRepo.findOne({where: {id}});
    if(!employee) throw new NotFoundException("Employee not found.");

    Object.assign(employee, updateEmployeeDto);
    return await this.employeeRepo.save(employee);
  }

  async remove(id: number) {
    const employee = await this.employeeRepo.findOne({where: {id}});
    if(!employee) throw new NotFoundException("Employee not found.");

    return await this.employeeRepo.remove(employee);
  }
}
