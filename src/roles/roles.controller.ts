import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private RolesService: RolesService) {}
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.RolesService.createRole(dto);
  }
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.RolesService.getRoleByValue(value);
  }
}
