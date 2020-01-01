import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { Course } from '@libs/db/models/course.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: Course
})

@Controller('courses')
@ApiUseTags('课程')
export class CoursesController {
  constructor(
    @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>
  ) { }

  @Get('option')
  option() {
    return {
      title: '课程管理',
      dialogDirection: 'rtl',
      dialogType: 'drawer',
      column: [
        {
          prop: 'name', label: '课程名称', row: true, sortable: true,
          search: true, regex: true
        },
        { 
          prop: 'cover', label: '课程封面图', row: true,
          type: 'upload', listType: 'picture-img', action: 'upload',
          width: 100
        },
      ]
    }
  }

}
