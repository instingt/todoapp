import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class TaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  startDate?: number;

  @IsNumber()
  @IsOptional()
  dueDate?: number;

  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;

  @IsNumber()
  @IsOptional()
  contextId?: number;

  @IsNumber()
  @IsOptional()
  projectId?: number;
}
