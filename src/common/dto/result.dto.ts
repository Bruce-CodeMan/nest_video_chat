import { PageDto } from "@/common/dto/page.dto";

export class ResultDto<T> {
  code: number;
  message: string;
  data?: T;
}

export class ResultsDto<T> {
  code: number;
  message: string;
  data?: T[];
  page?: PageDto;
}