import { WalletRepository as Contract } from '../contracts';
import { DatabaseRepository } from '@libs/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class WalletRepository extends DatabaseRepository implements Contract {
  @InjectModel('Wallet')
  model: any;
}
