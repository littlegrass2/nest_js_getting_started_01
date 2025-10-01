import { Controller, Get, Req, Res } from '@nestjs/common';
import { CatsService } from './cats.service';
import type { Response } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('hello')
  getHello(): string {
    return this.catsService.getHello();
  }

  @Get('all')
  findAll(@Res() res: Response) {
    // console.log('Request:', request);
    console.log('Response:', res);
    // return 'This action returns all cats';
    res.header('Custom-Header', 'NestJS - 001122');
    res.status(201).send('This action returns all cats 201');
  }
}
