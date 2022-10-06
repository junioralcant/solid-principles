import { FacilityOutputDTO } from '../presenters/facility/facility.output.dto';

export interface FacilityGateway {
  findByID(id: string): Promise<FacilityOutputDTO>;
}
