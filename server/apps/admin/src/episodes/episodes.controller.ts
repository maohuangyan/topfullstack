import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Episode } from '@libs/db/models/episode.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: Episode
})

@ApiUseTags('课时')
@Controller('episodes')
export class EpisodesController {
  constructor(
    @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>
  ) { }

  @Get('option')
  option() {
    return {
      title: '课时管理',
      dialogType: 'drawer',
      column: [
        { prop: 'name', label: '课时名称' },
        { prop: 'file', label: '文件' },
      ]
    }
  }

}
