import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions: string[] = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  private isValidStatus(status: string): boolean {
    const idx = this.StatusOptions.indexOf(status);
    return idx !== -1;
  }
  transform(value: string) {
    value = value.toUpperCase();

    if (!this.isValidStatus(value)) {
      throw new BadRequestException();
    }
    return value;
  }
}
